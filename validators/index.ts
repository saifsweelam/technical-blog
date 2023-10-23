import { RequestHandler, Response } from 'express';
import { ValidationError } from 'zod-express-validator';
import createError, { HttpError } from 'http-errors';
import { ZodSchema } from 'zod';

export interface Validator {
    bodySchema?: ZodSchema,
    paramsSchema?: ZodSchema,
    querySchema?: ZodSchema,
    resSchema?: ZodSchema,

    validate(): RequestHandler
}

export interface APIResponse<Resource> {
    success: boolean,
    statusCode: number,
    count?: number,
    page?: number,
    body?: Resource,
    error?: HttpError,
}

export function errorHandler (errors: ValidationError<any, any, any>, res: Response): Response {
    throw createError(400, "Validation Error", errors);
}