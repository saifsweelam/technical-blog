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
exports.getTopicPost = exports.createTopicPost = exports.getTopicPosts = exports.getTopic = exports.createTopic = exports.getTopics = void 0;
const Posts = __importStar(require("../models/posts.models"));
const Topics = __importStar(require("../models/topics.models"));
const Likes = __importStar(require("../models/likes.models"));
const responser_service_1 = __importDefault(require("../services/responser.service"));
const http_errors_1 = __importDefault(require("http-errors"));
const getTopics = async (req, res, next) => {
    try {
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const topics = await Topics.getTopics(paginationOptions);
        paginationOptions.count = topics.length;
        responser_service_1.default.success(res, topics, 200, paginationOptions);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getTopics = getTopics;
const createTopic = async (req, res, next) => {
    try {
        const topic = await Topics.createTopic({
            name: req.body.name,
            icon: req.body.icon
        });
        responser_service_1.default.success(res, topic, 201);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.createTopic = createTopic;
const getTopic = async (req, res, next) => {
    try {
        const topic = await Topics.getTopicById(req.params.topicId, req.query.includePosts);
        if (!topic)
            return next((0, http_errors_1.default)(404, "Topic Not Found"));
        responser_service_1.default.success(res, topic);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getTopic = getTopic;
const getTopicPosts = async (req, res, next) => {
    try {
        const topic = await Topics.getTopicById(req.params.topicId);
        if (!topic)
            return next((0, http_errors_1.default)(404, "Topic Not Found"));
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const posts = await Posts.getPosts(paginationOptions, {
            topicId: req.params.topicId,
            authorId: req.query.author,
            content: { contains: req.query.q }
        });
        paginationOptions.count = posts.length;
        responser_service_1.default.success(res, posts, 200, paginationOptions);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getTopicPosts = getTopicPosts;
const createTopicPost = async (req, res, next) => {
    try {
        const topic = await Topics.getTopicById(req.params.topicId);
        if (!topic)
            return next((0, http_errors_1.default)(404, "Topic Not Found"));
        const post = await Posts.createPost({
            title: req.body.title,
            content: req.body.content,
            thumbnail: req.body.thumbnail,
            authorId: req.user.id,
            topicId: req.params.topicId
        });
        responser_service_1.default.success(res, post, 201);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.createTopicPost = createTopicPost;
const getTopicPost = async (req, res, next) => {
    try {
        const post = req.query.full ? await Posts.getFullPostById(req.params.postId) : await Posts.getPostById(req.params.postId);
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
exports.getTopicPost = getTopicPost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNzLmNvbnRyb2xsZXJzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvdG9waWNzLmNvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsOERBQWdEO0FBQ2hELGdFQUFrRDtBQUNsRCw4REFBZ0Q7QUFDaEQsc0ZBQTZEO0FBRTdELDhEQUEwQztBQUVuQyxNQUFNLFNBQVMsR0FBd0IsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDbkUsSUFBSTtRQUNBLE1BQU0saUJBQWlCLEdBQXNCO1lBQ3pDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUs7WUFDckIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBTTtTQUMxQixDQUFDO1FBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekQsaUJBQWlCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDeEMsMkJBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDakU7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUEscUJBQWUsR0FBRSxDQUFDLENBQUM7S0FDM0I7QUFDTCxDQUFDLENBQUE7QUFiWSxRQUFBLFNBQVMsYUFhckI7QUFHTSxNQUFNLFdBQVcsR0FBMEIsS0FBSyxFQUFFLEdBQXVCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQzNGLElBQUk7UUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDbkMsSUFBSSxFQUFFLEdB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