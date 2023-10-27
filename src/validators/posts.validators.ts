import { z } from 'zod';
import { validate } from 'zod-express-validator';
import { errorHandler, idParamsValidator, paginationFields } from '.';

export const getPosts = validate({
    query: z.object({
        q: z.string().optional(),
        author: z.coerce.number().int().optional(),
        topic: z.coerce.number().int().optional(),
        ...paginationFields
    })
}, errorHandler);

export declare type GetPostsMiddleware = typeof getPosts;

export const createPost = validate({
    body: z.object({
        title: z.string(),
        content: z.string(),
        thumbnail: z.string().url().optional(),
        topicId: z.number().int()
    })
}, errorHandler);

export declare type CreatePostMiddleware = typeof createPost;

export const getPost = validate({
    params: idParamsValidator("postId")
}, errorHandler);

export declare type GetPostMiddleware = typeof getPost;

export const patchPost = validate({
    params: idParamsValidator("postId"),
    body: z.object({
        content: z.string().optional(),
        thumbnail: z.string().url().optional(),
        topicId: z.number().int().optional()
    })
}, errorHandler);

export declare type PatchPostMiddleware = typeof patchPost;

export const deletePost = validate({
    params: idParamsValidator("postId")
}, errorHandler);

export declare type DeletePostMiddleware = typeof deletePost;

export const getPostComments = validate({
    params: idParamsValidator("postId"),
    query: z.object(paginationFields)
}, errorHandler);

export declare type GetPostCommentsMiddleware = typeof getPostComments;

export const createPostComment = validate({
    params: idParamsValidator("postId"),
    body: z.object({
        content: z.string()
    })
}, errorHandler);

export declare type CreatePostCommentMiddleware = typeof createPostComment;

export const getPostLikes = validate({
    params: idParamsValidator("postId"),
    query: z.object(paginationFields)
}, errorHandler);

export declare type GetPostLikesMiddleware = typeof getPostLikes;

export const createPostLike = validate({
    params: idParamsValidator("postId")
}, errorHandler);

export declare type CreatePostLikeMiddleware = typeof createPostLike;

export const deletePostLike = validate({
    params: idParamsValidator("postId")
}, errorHandler);

export declare type DeletePostLikeMiddleware = typeof deletePostLike;