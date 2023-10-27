import { z } from 'zod';
import { validate } from 'zod-express-validator';
import { errorHandler, idParamsValidator, paginationFields } from '.';

export const getTopics = validate({
    query: z.object(paginationFields)
}, errorHandler);

export declare type GetTopicsMiddleware = typeof getTopics;

export const createTopic = validate({
    body: z.object({
        name: z.string(),
        icon: z.string().url()
    })
}, errorHandler);

export declare type CreateTopicMiddleware = typeof createTopic;

export const getTopic = validate({
    params: idParamsValidator("topicId"),
    query: z.object({
        includePosts: z.coerce.boolean().default(false)
    })
}, errorHandler);

export declare type GetTopicMiddleware = typeof getTopic;

export const getTopicPosts = validate({
    params: idParamsValidator("topicId"),
    query: z.object({
        q: z.string().optional(),
        author: z.coerce.number().int().optional(),
        ...paginationFields
    })
}, errorHandler);

export declare type GetTopicPostsMiddleware = typeof getTopicPosts;

export const createTopicPost = validate({
    params: idParamsValidator("topicId"),
    body: z.object({
        title: z.string(),
        content: z.string(),
        thumbnail: z.string().url().optional(),
    })
}, errorHandler);

export declare type CreateTopicPostMiddleware = typeof createTopicPost;

export const getTopicPost = validate({
    params: idParamsValidator("topicId", "postId")
}, errorHandler);

export declare type GetTopicPostMiddleware = typeof getTopicPost;