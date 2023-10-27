import { z } from 'zod';
import { validate } from 'zod-express-validator';
import { errorHandler, idParamsValidator, paginationFields } from '.';

export const getComments = validate({
    query: z.object({
        q: z.string().optional(),
        author: z.coerce.number().int().optional(),
        post: z.coerce.number().int().optional(),
        ...paginationFields
    })
}, errorHandler);

export declare type GetCommentsMiddleware = typeof getComments;

export const createComment = validate({
    body: z.object({
        content: z.string(),
        postId: z.number().int()
    })
}, errorHandler);

export declare type CreateCommentMiddleware = typeof createComment;

export const getComment = validate({
    params: idParamsValidator("commentId"),
    query: z.object({
        includePost: z.coerce.boolean().default(false)
    })
}, errorHandler);

export declare type GetCommentMiddleware = typeof getComment;

export const patchComment = validate({
    params: idParamsValidator("commentId"),
    body: z.object({
        content: z.string().optional(),
    })
}, errorHandler);

export declare type PatchCommentMiddleware = typeof patchComment;

export const deleteComment = validate({
    params: idParamsValidator("commentId")
}, errorHandler);

export declare type DeleteCommentMiddleware = typeof deleteComment;
