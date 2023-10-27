import { AuthorizedRequest } from "../middlewares/auth.middlewares";
import { GetUserCommentsMiddleware, GetUserLikesMiddleware, GetUserMiddleware, GetUserPostMiddleware, GetUserPostsMiddleware, GetUsersMiddleware } from "../validators/users.validators";
import * as Users from '../models/users.models';
import * as Posts from '../models/posts.models';
import * as Likes from '../models/likes.models';
import * as Comments from '../models/comments.models';
import responserService from "../services/responser.service";
import { PaginationOptions } from "../utils/types";
import createHttpError from "http-errors";

export const getUsers: GetUsersMiddleware = async (req, res, next) => {
    try {
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        };
        const users = await Users.getUsers(paginationOptions, {
            name: { contains: req.query.q }
        });
        paginationOptions.count = users.length;
        responserService.success(res, users, 200, paginationOptions);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getUser: GetUserMiddleware = async (req, res, next) => {
    try {
        const user = await Users.getUserById(req.params.userId, req.query.includePosts);
        if (!user) return next(createHttpError(404, "User Not Found"));
        responserService.success(res, Users.excludePassword(user));
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getUserPosts: GetUserPostsMiddleware = async (req, res, next) => {
    try {
        const user = await Users.getUserById(req.params.userId);
        if (!user) return next(createHttpError(404, "User Not Found"));
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        }
        const posts = await Posts.getPosts(paginationOptions, {
            topicId: req.query.topic,
            authorId: req.params.userId,
            content: { contains: req.query.q }
        });
        paginationOptions.count = posts.length;
        responserService.success(res, posts, 200, paginationOptions);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type GetUserPostRequuest = AuthorizedRequest<Parameters<GetUserPostMiddleware>[0]>
export const getUserPost: GetUserPostMiddleware = async (req: GetUserPostRequuest, res, next) => {
    try {
        const post = req.query.full ? await Posts.getFullPostById(req.params.postId) : await Posts.getPostById(req.params.postId);
        if (!post) return next(createHttpError(404, "Post Not Found"));
        const isLiked = (req.user?.id && await Likes.getLikeByUserAndPost(req.user.id, req.params.postId)) ? true : false;
        responserService.success(res, { post, isLiked });
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getUserComments: GetUserCommentsMiddleware = async (req, res, next) => {
    try {
        const user = await Users.getUserById(req.params.userId);
        if (!user) return next(createHttpError(404, "User Not Found"));
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        };
        const comments = await Comments.getComments(paginationOptions, {
            authorId: req.params.userId
        });
        paginationOptions.count = comments.length;
        responserService.success(res, comments);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getUserLikes: GetUserLikesMiddleware = async (req, res, next) => {
    try {
        const user = await Users.getUserById(req.params.userId);
        if (!user) return next(createHttpError(404, "User Not Found"));
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        };
        const likes = await Likes.getLikesWithPosts(paginationOptions, {
            userId: req.params.userId
        });
        paginationOptions.count = likes.length;
        responserService.success(res, likes);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}