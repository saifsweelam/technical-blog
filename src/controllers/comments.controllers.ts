import { AuthorizedRequest } from "../middlewares/auth.middlewares";
import { CreateCommentMiddleware, DeleteCommentMiddleware, GetCommentMiddleware, GetCommentsMiddleware, PatchCommentMiddleware } from "../validators/comments.validators";
import * as Posts from '../models/posts.models';
import * as Comments from '../models/comments.models';
import responserService from "../services/responser.service";
import { PaginationOptions } from "../utils/types";
import createHttpError from "http-errors";

export const getComments: GetCommentsMiddleware = async (req, res, next) => {
    try {
        const paginationOptions: PaginationOptions = {
            page: req.query.page!,
            count: req.query.count!
        };
        const comments = await Comments.getComments(paginationOptions, {
            postId: req.query.post,
            authorId: req.query.author,
            content: { contains: req.query.q }
        });
        paginationOptions.count = comments.length;
        responserService.success(res, comments, 200, paginationOptions);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type CreateCommentRequest = AuthorizedRequest<Parameters<CreateCommentMiddleware>[0]>;
export const createComment: CreateCommentMiddleware = async (req: CreateCommentRequest, res, next) => {
    try {
        const post = await Posts.getPostById(req.body.postId);
        if (!post) return next(createHttpError(400, "Post doesn't exist"));
        const comment = await Comments.createComment({
            content: req.body.content,
            postId: req.body.postId,
            authorId: req.user!.id
        });
        responserService.success(res, comment, 201);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

export const getComment: GetCommentMiddleware = async (req, res, next) => {
    try {
        const comment = await Comments.getCommentById(req.params.commentId, req.query.includePost);
        if (!comment) return next(createHttpError(404, "Comment Not Found"));
        responserService.success(res, comment);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type PatchCommentRequest = AuthorizedRequest<Parameters<PatchCommentMiddleware>[0]>
export const patchComment: PatchCommentMiddleware = async (req: PatchCommentRequest, res, next) => {
    try {
        const authorId = await Comments.getCommentAuthorId(req.params.commentId);
        if (!authorId) return next(createHttpError(404, "Comment Not Found"));
        if (authorId !== req.user!.id) return next(createHttpError(401, "You can't edit this item"));
        const comment = await Comments.updateComment(req.params.commentId, {
            content: req.body.content,
        });
        responserService.success(res, comment);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}

type DeleteCommentRequest = AuthorizedRequest<Parameters<DeleteCommentMiddleware>[0]>
export const deleteComment: DeleteCommentMiddleware = async (req: DeleteCommentRequest, res, next) => {
    try {
        const authorId = await Comments.getCommentAuthorId(req.params.commentId);
        if (!authorId) return next(createHttpError(404, "Comment Not Found"));
        if (authorId !== req.user!.id) return next(createHttpError(401, "You can't delete this item"));
        const comment = await Comments.deleteComment(req.params.commentId);
        responserService.success(res, comment);
    } catch (err) {
        console.error(err);
        next(createHttpError());
    }
}
