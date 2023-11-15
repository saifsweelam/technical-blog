import createHttpError from "http-errors";
import hashService from "../services/hash.service";
import jwtService from "../services/jwt.service";
import responserService from "../services/responser.service";
import * as Users from "../models/users.models";
import { LoginMiddleware, RegisterMiddleware } from "../validators/auth.validators";
import { RequestHandler } from "express";

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

export const refresh: RequestHandler = async (req, res, next) => {
    const token: string = req.cookies?.refreshToken;
    if (!token) return next(createHttpError(401, "No Refresh Token"));
    const userId = jwtService.decryptRefreshToken(token);
    if (!userId) return next(createHttpError(401, "Invalid Refresh Token"));
    const user = await Users.getUserById(userId);
    if (!user) return next(createHttpError(401, "Invalid Refresh Token"));
    const accessToken = jwtService.generateAccessToken(user);
    const refreshToken = jwtService.generateRefreshToken(user.id);
    res.cookie("refreshToken", refreshToken, { maxAge: 3.516e10, httpOnly: true });
    return responserService.success(res, { user: Users.excludePassword(user), accessToken });
}