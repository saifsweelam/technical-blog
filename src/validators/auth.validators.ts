import { z } from 'zod';
import { validate } from 'zod-express-validator';
import { errorHandler } from '.';

export const login = validate({
    body: z.object({
        email: z.string().email(),
        password: z.string().min(8).max(32)
    })
}, errorHandler);

export declare type LoginMiddleware = typeof login;

export const register = validate({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8).max(32),
        avatar: z.string().url().optional(),
    })
}, errorHandler)

export declare type RegisterMiddleware = typeof register;