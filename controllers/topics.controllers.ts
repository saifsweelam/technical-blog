import { AuthorizedRequest } from "../middlewares/auth.middlewares";
import { CreateTopicMiddleware, CreateTopicPostMiddleware, GetTopicMiddleware, GetTopicPostMiddleware, GetTopicPostsMiddleware, GetTopicsMiddleware } from "../validators/topics.validators";
import * as Posts from '../models/posts.models';
import * as Topics from '../models/topics.models';
import * as Comments from '../models/comments.models';
import * as Likes from '../models/likes.models';
import responserService from "../services/responser.service";
import { PaginationOptions } from "../utils/types";
import createHttpError from "http-errors";

export const getTopics: GetTopicsMiddleware = async (req, res, next) => {
    try {
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        };
        const topics = await Topics.getTopics(paginationOptions);
        paginationOptions.count = topics.length;
        responserService.success(res, topics, 200, paginationOptions);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type CreateTopicRequest = AuthorizedRequest<Parameters<CreateTopicMiddleware>[0]>;
export const createTopic: CreateTopicMiddleware = async (req: CreateTopicRequest, res, next) => {
    try {
        const topic = await Topics.createTopic({
            name: req.body.name,
            icon: req.body.icon
        });
        responserService.success(res, topic, 201);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getTopic: GetTopicMiddleware = async (req, res, next) => {
    try {
        const topic = await Topics.getTopicById(req.params.topicId, req.query.includePosts);
        if (!topic) return next(createHttpError(404, "Topic Not Found"));
        responserService.success(res, topic);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getTopicPosts: GetTopicPostsMiddleware = async (req, res, next) => {
    try {
        const topic = await Topics.getTopicById(req.params.topicId);
        if (!topic) return next(createHttpError(404, "Topic Not Found"));
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        }
        const posts = await Posts.getPosts(paginationOptions, {
            topicId: req.params.topicId,
            authorId: req.query.author,
            content: { contains: req.query.q }
        });
        paginationOptions.count = posts.length;
        responserService.success(res, posts, 200, paginationOptions);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type CreateTopicPostRequest = AuthorizedRequest<Parameters<CreateTopicPostMiddleware>[0]>;
export const createTopicPost: CreateTopicPostMiddleware = async (req: CreateTopicPostRequest, res, next) => {
    try {
        const topic = await Topics.getTopicById(req.params.topicId);
        if (!topic) return next(createHttpError(404, "Topic Not Found"));
        const post = await Posts.createPost({
            content: req.body.content,
            thumbnail: req.body.thumbnail,
            authorId: req.user!.id,
            topicId: req.params.topicId
        });
        responserService.success(res, post, 201);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type GetTopicPostRequuest = AuthorizedRequest<Parameters<GetTopicPostMiddleware>[0]>
export const getTopicPost: GetTopicPostMiddleware = async (req: GetTopicPostRequuest, res, next) => {
    try {
        const post = await Posts.getFullPostById(req.params.postId);
        if (!post) return next(createHttpError(404, "Post Not Found"));
        const isLiked = (req.user?.id && await Likes.getLikeByUserAndPost(req.user.id, req.params.postId)) ? true : false;
        responserService.success(res, { post, isLiked });
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}