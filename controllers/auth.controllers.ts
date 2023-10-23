import createError from "http-errors";
import hash from "../services/hash.service";
import jwt from "../services/jwt.service";
import responser from "../services/responser.service";
import { createUser, excludePassword, getUserByEmail } from "../models/users.models";
import { LoginMiddleware, RegisterMiddleware } from "../validators/auth.validators";

export const login: LoginMiddleware = async (req, res, next) => {
    try {
        const user = await getUserByEmail(req.body.email);
        if (!user) return next(createError(404, "User not found"));
        if (!await hash.check(req.body.password, user)) return next(createError(401, "Incorrect Password"));
        const token = jwt.generate(user);
        responser.success(res, { user: excludePassword(user), token });
    } catch (err) {
        next(createError());
    }
}

export const register: RegisterMiddleware = async (req, res, next) => {
    try {
        const existingUser = await getUserByEmail(req.body.email);
        if (existingUser) return next(createError(400, "User Already Exists"));
        const newUser = await createUser({
            name: req.body.name,
            password: await hash.hash(req.body.password),
            email: req.body.email,
            avatar: req.body.avatar
        });
        responser.success(res, excludePassword(newUser), 201);
    } catch (err) {
        console.error(err)
        next(createError());
    }
}