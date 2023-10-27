import { z } from 'zod';
import { validate } from 'zod-express-validator';
import { errorHandler, idParamsValidator, paginationFields } from '.';

export const getUsers = validate({
    query: z.object({
        q: z.string().optional(),
        ...paginationFields
    })
}, errorHandler);

export declare type GetUsersMiddleware = typeof getUsers;

export const getUser = validate({
    params: idParamsValidator("userId"),
    query: z.object({
        includePosts: z.coerce.boolean().default(false)
    })
}, errorHandler);

export declare type GetUserMiddleware = typeof getUser;

export const getUserPosts = validate({
    params: idParamsValidator("userId"),
    query: z.object({
        q: z.string().optional(),
        topic: z.coerce.number().int().optional(),
        ...paginationFields
    })
}, errorHandler);

export declare type GetUserPostsMiddleware = typeof getUserPosts;

export const getUserPost = validate({
    params: idParamsValidator("userId", "postId"),
    query: z.object({
        full: z.coerce.boolean().default(false)
    })
}, errorHandler);

export declare type GetUserPostMiddleware = typeof getUserPost;

export const getUserComments = validate({
    params: idParamsValidator("userId"),
    query: z.object(paginationFields)
}, errorHandler);

export declare type GetUserCommentsMiddleware = typeof getUserComments;

export const getUserLikes = validate({
    params: idParamsValidator("userId"),
    query: z.object(paginationFields)
}, errorHandler);

export declare type GetUserLikesMiddleware = typeof getUserLikes;