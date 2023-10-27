import createHttpError from "http-errors";
import hashService from "../services/hash.service";
import jwtService from "../services/jwt.service";
import responserService from "../services/responser.service";
import * as Users from "../models/users.models";
import { LoginMiddleware, RegisterMiddleware } from "../validators/auth.validators";

export const login: LoginMiddleware = async (req, res, next) => {
    try {
        const user = await Users.getUserByEmail(req.body.email);
        if (!user) return next(createHttpError(404, "User not found"));
        if (!await hashService.check(req.body.password, user)) return next(createHttpError(401, "Incorrect Password"));
        const accessToken = jwtService.generateAccessToken(user);
        const refreshToken = jwtService.generateRefreshToken(user.id);
        res.cookie("refreshToken", refreshToken, { maxAge: 3.516e10, httpOnly: true });
        responserService.success(res, { user: Users.excludePassword(user), accessToken });
    } catch (err) {
        next(createHttpError());
    }
}

export const register: RegisterMiddleware = async (req, res, next) => {
    try {
        const existingUser = await Users.getUserByEmail(req.body.email);
        if (existingUser) return next(createHttpError(400, "User Already Exists"));
        const newUser = await Users.createUser({
            name: req.body.name,
            password: await hashService.hash(req.body.password),
            email: req.body.email,
            avatar: req.body.avatar
        });
        responserService.success(res, Users.excludePassword(newUser), 201);
    } catch (err) {
        console.error(err)
        next(createHttpError());
    }
}