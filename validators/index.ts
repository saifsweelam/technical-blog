import { Response } from 'express';
import { ValidationError } from 'zod-express-validator';
import createHttpError, { HttpError } from 'http-errors';
import { z } from 'zod';

export interface APIResponse<Resource = any> {
    success: boolean,
    statusCode: number,
    count?: number,
    page?: number,
    body?: Resource,
    error?: HttpError,
}

export function errorHandler (errors: ValidationError<any, any, any>, res: Response): Response {
    throw createHttpError(400, "Validation Error", errors);
}

export function idParamsValidator<T extends string> (...params: T[]): z.ZodObject<{ [K in T]: z.ZodNumber }> {
    return z.object(Object.fromEntries(params.map(param => [param, z.coerce.number().int()])) as { [K in T]: z.ZodNumber });
}

export const paginationFields = {
    page: z.coerce.number().int().default(1),
    count: z.coerce.number().int().default(10)
}
