"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostLike = exports.createPostLike = exports.getPostLikes = exports.createPostComment = exports.getPostComments = exports.deletePost = exports.patchPost = exports.getPost = exports.createPost = exports.getPosts = void 0;
const Posts = __importStar(require("../models/posts.models"));
const Topics = __importStar(require("../models/topics.models"));
const Comments = __importStar(require("../models/comments.models"));
const Likes = __importStar(require("../models/likes.models"));
const responser_service_1 = __importDefault(require("../services/responser.service"));
const http_errors_1 = __importDefault(require("http-errors"));
const getPosts = async (req, res, next) => {
    try {
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const posts = await Posts.getPosts(paginationOptions, {
            topicId: req.query.topic,
            authorId: req.query.author,
            content: {
                contains: req.query.q
            }
        });
        paginationOptions.count = posts.length;
        responser_service_1.default.success(res, posts, 200, paginationOptions);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getPosts = getPosts;
const createPost = async (req, res, next) => {
    try {
        const topic = await Topics.getTopicById(req.body.topicId);
        if (!topic)
            return next((0, http_errors_1.default)(400, "Topic doesn't exist"));
        const post = await Posts.createPost({
            content: req.body.content,
            thumbnail: req.body.thumbnail,
            topicId: req.body.topicId,
            authorId: req.user.id
        });
        responser_service_1.default.success(res, post, 201);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.createPost = createPost;
const getPost = async (req, res, next) => {
    try {
        const post = await Posts.getFullPostById(req.params.postId);
        if (!post)
            return next((0, http_errors_1.default)(404, "Post Not Found"));
        const isLiked = (req.user?.id && await Likes.getLikeByUserAndPost(req.user.id, req.params.postId)) ? true : false;
        responser_service_1.default.success(res, { post, isLiked });
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getPost = getPost;
const patchPost = async (req, res, next) => {
    try {
        const authorId = await Posts.getPostAuthorId(req.params.postId);
        if (!authorId)
            return next((0, http_errors_1.default)(404, "Post Not Found"));
        if (authorId !== req.user.id)
            return next((0, http_errors_1.default)(401, "You can't edit this item"));
        const post = await Posts.updatePost(req.params.postId, {
            content: req.body.content,
            thumbnail: req.body.thumbnail,
            topicId: req.body.topicId
        });
        responser_service_1.default.success(res, post);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.patchPost = patchPost;
const deletePost = async (req, res, next) => {
    try {
        const authorId = await Posts.getPostAuthorId(req.params.postId);
        if (!authorId)
            return next((0, http_errors_1.default)(404, "Post Not Found"));
        if (authorId !== req.user.id)
            return next((0, http_errors_1.default)(401, "You can't delete this item"));
        const post = await Posts.deletePost(req.params.postId);
        responser_service_1.default.success(res, post);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.deletePost = deletePost;
const getPostComments = async (req, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post)
            return next((0, http_errors_1.default)(404, "Post Not Found"));
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const comments = await Comments.getComments(paginationOptions, { postId: req.params.postId });
        paginationOptions.count = comments.length;
        responser_service_1.default.success(res, comments, 200, paginationOptions);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getPostComments = getPostComments;
const createPostComment = async (req, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post)
            return next((0, http_errors_1.default)(404, "Post Not Found"));
        const comment = await Comments.createComment({
            content: req.body.content,
            authorId: req.user.id,
            postId: req.params.postId
        });
        responser_service_1.default.success(res, comment, 201);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.createPostComment = createPostComment;
const getPostLikes = async (req, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post)
            return next((0, http_errors_1.default)(404, "Post Not Found"));
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const likes = await Likes.getLikesWithUsers(paginationOptions, { postId: req.params.postId });
        paginationOptions.count = likes.length;
        responser_service_1.default.success(res, likes, 200, paginationOptions);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getPostLikes = getPostLikes;
const createPostLike = async (req, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post)
            return next((0, http_errors_1.default)(404, "Post Not Found"));
        const existingLike = await Likes.getLikeByUserAndPost(req.user.id, req.params.postId);
        if (existingLike)
            return next((0, http_errors_1.default)(400, "You already like this Post"));
        const like = await Likes.createLike({
            userId: req.user.id,
            postId: req.params.postId
        });
        responser_service_1.default.success(res, like, 201);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.createPostLike = createPostLike;
const deletePostLike = async (req, res, next) => {
    try {
        const post = await Posts.getPostById(req.params.postId);
        if (!post)
            return next((0, http_errors_1.default)(404, "Post Not Found"));
        const like = await Likes.getLikeByUserAndPost(req.user.id, req.params.postId);
        if (!like)
            return next((0, http_errors_1.default)(404, "Like doesn't exist"));
        await Likes.deleteLikeByUserAndPost(req.user.id, req.params.postId);
        responser_service_1.default.success(res, like);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.deletePostLike = deletePostLike;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9wb3N0cy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDhEQUFnRDtBQUNoRCxnRUFBa0Q7QUFDbEQsb0VBQXNEO0FBQ3RELDhEQUFnRDtBQUNoRCxzRkFBNkQ7QUFFN0QsOERBQTBDO0FBRW5DLE1BQU0sUUFBUSxHQUF1QixLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNqRSxJQUFJO1FBQ0EsTUFBTSxpQkFBaUIsR0FBc0I7WUFDekMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSztZQUNyQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFNO1NBQzFCLENBQUM7UUFDRixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDbEQsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSztZQUN4QixRQUFRLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQzFCLE9BQU8sRUFBRTtnQkFDTCxRQUFRLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsaUJBQWlCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdkMsMkJBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDaEU7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUEscUJBQWUsR0FBRSxDQUFDLENBQUM7S0FDM0I7QUFDTCxDQUFDLENB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