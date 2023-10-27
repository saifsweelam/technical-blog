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
exports.getUserLikes = exports.getUserComments = exports.getUserPost = exports.getUserPosts = exports.getUser = exports.getUsers = void 0;
const Users = __importStar(require("../models/users.models"));
const Posts = __importStar(require("../models/posts.models"));
const Likes = __importStar(require("../models/likes.models"));
const Comments = __importStar(require("../models/comments.models"));
const responser_service_1 = __importDefault(require("../services/responser.service"));
const http_errors_1 = __importDefault(require("http-errors"));
const getUsers = async (req, res, next) => {
    try {
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const users = await Users.getUsers(paginationOptions, {
            name: { contains: req.query.q }
        });
        paginationOptions.count = users.length;
        responser_service_1.default.success(res, users, 200, paginationOptions);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getUsers = getUsers;
const getUser = async (req, res, next) => {
    try {
        const user = await Users.getUserById(req.params.userId, req.query.includePosts);
        if (!user)
            return next((0, http_errors_1.default)(404, "User Not Found"));
        responser_service_1.default.success(res, Users.excludePassword(user));
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getUser = getUser;
const getUserPosts = async (req, res, next) => {
    try {
        const user = await Users.getUserById(req.params.userId);
        if (!user)
            return next((0, http_errors_1.default)(404, "User Not Found"));
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const posts = await Posts.getPosts(paginationOptions, {
            topicId: req.query.topic,
            authorId: req.params.userId,
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
exports.getUserPosts = getUserPosts;
const getUserPost = async (req, res, next) => {
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
exports.getUserPost = getUserPost;
const getUserComments = async (req, res, next) => {
    try {
        const user = await Users.getUserById(req.params.userId);
        if (!user)
            return next((0, http_errors_1.default)(404, "User Not Found"));
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const comments = await Comments.getComments(paginationOptions, {
            authorId: req.params.userId
        });
        paginationOptions.count = comments.length;
        responser_service_1.default.success(res, comments);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getUserComments = getUserComments;
const getUserLikes = async (req, res, next) => {
    try {
        const user = await Users.getUserById(req.params.userId);
        if (!user)
            return next((0, http_errors_1.default)(404, "User Not Found"));
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const likes = await Likes.getLikesWithPosts(paginationOptions, {
            userId: req.params.userId
        });
        paginationOptions.count = likes.length;
        responser_service_1.default.success(res, likes);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getUserLikes = getUserLikes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy91c2Vycy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDhEQUFnRDtBQUNoRCw4REFBZ0Q7QUFDaEQsOERBQWdEO0FBQ2hELG9FQUFzRDtBQUN0RCxzRkFBNkQ7QUFFN0QsOERBQTBDO0FBRW5DLE1BQU0sUUFBUSxHQUF1QixLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNqRSxJQUFJO1FBQ0EsTUFBTSxpQkFBaUIsR0FBc0I7WUFDekMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSztZQUNyQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFNO1NBQzFCLENBQUM7UUFDRixNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDbEQsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1NBQ2xDLENBQUMsQ0FBQztRQUNILGlCQUFpQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLDJCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0tBQ2hFO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFBLHFCQUFlLEdBQUUsQ0FBQyxDQUFDO0tBQzNCO0FBQ0wsQ0FBQyxDQUFBO0FBZlksUUFBQSxRQUFRLFlBZXBCO0FBRU0sTUFBTSxPQUFPLEdBQXNCLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFB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