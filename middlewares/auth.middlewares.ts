import createHttpError, { HttpError } from 'http-errors';
import jwtService from '../services/jwt.service';
import responserService from '../services/responser.service';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { User, excludePassword, getUserById } from '../models/users.models';

export declare type AuthorizedRequest<R extends Request<any> = Request> = R & { user?: User }

export const userMiddleware: RequestHandler = (req: AuthorizedRequest, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader) return next();
        const parts = authHeader.split(" ");
        if (parts.length < 2) return next();
        const token = parts[1];
        const user = jwtService.decryptAccessToken(token);
        if (!user) return next();
        req.user = user;
        return next();
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const requiresAuth: RequestHandler<any> = (req: AuthorizedRequest, res, next) => {
    if (!req.user) return checkRefreshToken(req, res, next);
    return next();
}

const checkRefreshToken = async (req: Request, res: Response, next: NextFunction, err: HttpError = createHttpError(401)) => {
    const token: string = req.cookies?.refreshToken;
    if (!token) return next(err);
    const userId = jwtService.decryptRefreshToken(token);
    if (!userId) return next(err);
    const user = await getUserById(userId);
    if (!user) return next(err);
    const accessToken = jwtService.generateAccessToken(user);
    const refreshToken = jwtService.generateRefreshToken(user.id);
    res.cookie("refreshToken", refreshToken, { maxAge: 3.516e10, httpOnly: true });
    return responserService.success(res, { user: excludePassword(user), accessToken });
}