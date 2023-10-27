import { AuthorizedRequest } from "../middlewares/auth.middlewares";
import { CreatePostCommentMiddleware, CreatePostLikeMiddleware, CreatePostMiddleware, DeletePostLikeMiddleware, DeletePostMiddleware, GetPostCommentsMiddleware, GetPostLikesMiddleware, GetPostMiddleware, GetPostsMiddleware, PatchPostMiddleware } from "../validators/posts.validators";
import * as Posts from '../models/posts.models';
import * as Topics from '../models/topics.models';
import * as Comments from '../models/comments.models';
import * as Likes from '../models/likes.models';
import responserService from "../services/responser.service";
import { PaginationOptions } from "../utils/types";
import createHttpError from "http-errors";

export const getPosts: GetPostsMiddleware = async (req, res, next) => {
    try {
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        };
        const posts = await Posts.getPosts(paginationOptions, {
            topicId: req.query.topic,
            authorId: req.query.author,
            content: {
                contains: req.query.q
            }
        });
        paginationOptions.count = posts.length;
        responserService.success(res, posts, 200, paginationOptions);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type CreatePostRequest = AuthorizedRequest<Parameters<CreatePostMiddleware>[0]>;
export const createPost: CreatePostMiddleware = async (req: CreatePostRequest, res, next) => {
    try {
        const topic = await Topics.getTopicById(req.body.topicId);
        if (!topic) return next(createHttpError(400, "Topic doesn't exist"));
        const post = await Posts.createPost({
            title: req.body.title,
            content: req.body.content,
            thumbnail: req.body.thumbnail,
            topicId: req.body.topicId,
            authorId: req.user!.id
        });
        responserService.success(res, post, 201);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type GetPostRequest = AuthorizedRequest<Parameters<GetPostMiddleware>[0]>
export const getPost: GetPostMiddleware = async (req: GetPostRequest, res, next) => {
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

type PatchPostRequest = AuthorizedRequest<Parameters<PatchPostMiddleware>[0]>
export const patchPost: PatchPostMiddleware = async (req: PatchPostRequest, res, next) => {
    try {
        const authorId = await Posts.getPostAuthorId(req.params.postId);
        if (!authorId) return next(createHttpError(404, "Post Not Found"));
        if (authorId !== req.user!.id) return next(createHttpError(401, "You can't edit this item"));
        const post = await Posts.updatePost(req.params.postId, {
            content: req.body.content,
            thumbnail: req.body.thumbnail,
            topicId: req.body.topicId
        });
        responserService.success(res, post);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type DeletePostRequest = AuthorizedRequest<Parameters<DeletePostMiddleware>[0]>
export const deletePost: DeletePostMiddleware = async (req: DeletePostRequest, res, next) => {
    try {
        const authorId = await Posts.getPostAuthorId(req.params.postId);
        if (!authorId) return next(createHttpError(404, "Post Not Found"));
        if (authorId !== req.user!.id) return next(createHttpError(401, "You can't delete this item"));
        const post = await Posts.deletePost(req.params.postId);
        responserService.success(res, post);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getPostComments: GetPostCommentsMiddleware = async (req, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post) return next(createHttpError(404, "Post Not Found"));
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        }
        const comments = await Comments.getComments(paginationOptions, { postId: req.params.postId });
        paginationOptions.count = comments.length;
        responserService.success(res, comments, 200, paginationOptions);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type CreatePostCommentRequest = AuthorizedRequest<Parameters<CreatePostCommentMiddleware>[0]>;
export const createPostComment: CreatePostCommentMiddleware = async (req: CreatePostCommentRequest, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post) return next(createHttpError(404, "Post Not Found"));
        const comment = await Comments.createComment({
            content: req.body.content,
            authorId: req.user!.id,
            postId: req.params.postId
        });
        responserService.success(res, comment, 201);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getPostLikes: GetPostLikesMiddleware = async (req, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post) return next(createHttpError(404, "Post Not Found"));
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        }
        const likes = await Likes.getLikesWithUsers(paginationOptions, { postId: req.params.postId });
        paginationOptions.count = likes.length;
        responserService.success(res, likes, 200, paginationOptions);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type CreatePostLikeRequest = AuthorizedRequest<Parameters<CreatePostLikeMiddleware>[0]>
export const createPostLike: CreatePostLikeMiddleware = async (req: CreatePostLikeRequest, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post) return next(createHttpError(404, "Post Not Found"));
        const existingLike = await Likes.getLikeByUserAndPost(req.user!.id, req.params.postId);
        if (existingLike) return next(createHttpError(400, "You already like this Post"));
        const like = await Likes.createLike({
            userId: req.user!.id,
            postId: req.params.postId
        });
        responserService.success(res, like, 201);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type DeletePostLikeRequest = AuthorizedRequest<Parameters<DeletePostLikeMiddleware>[0]>;
export const deletePostLike: DeletePostLikeMiddleware = async (req: DeletePostLikeRequest, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post) return next(createHttpError(404, "Post Not Found"));
        const like = await Likes.getLikeByUserAndPost(req.user!.id, req.params.postId);
        if (!like) return next(createHttpError(404, "Like doesn't exist"));
        await Likes.deleteLikeByUserAndPost(req.user!.id, req.params.postId);
        responserService.success(res, like);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}