import { z } from 'zod';
import { validate } from 'zod-express-validator';
import { errorHandler, Validator } from '.';

class LoginValidator implements Validator {
    bodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(32)
    })

    validate() {
        return validate({ body: this.bodySchema }, errorHandler);
    }
}

export const login = new LoginValidator().validate();
export declare type LoginMiddleware = typeof login;

class RegisterValidator implements Validator {
    bodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8).max(32),
        avatar: z.string().url().optional(),
    })

    validate() {
        return validate({ body: this.bodySchema }, errorHandler);
    }
}

export const register = new RegisterValidator().validate();
export declare type RegisterMiddleware = typeof register;