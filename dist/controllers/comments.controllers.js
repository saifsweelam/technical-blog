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
exports.deleteComment = exports.patchComment = exports.getComment = exports.createComment = exports.getComments = void 0;
const Posts = __importStar(require("../models/posts.models"));
const Comments = __importStar(require("../models/comments.models"));
const responser_service_1 = __importDefault(require("../services/responser.service"));
const http_errors_1 = __importDefault(require("http-errors"));
const getComments = async (req, res, next) => {
    try {
        const paginationOptions = {
            page: req.query.page,
            count: req.query.count
        };
        const comments = await Comments.getComments(paginationOptions, {
            postId: req.query.post,
            authorId: req.query.author,
            content: { contains: req.query.q }
        });
        paginationOptions.count = comments.length;
        responser_service_1.default.success(res, comments, 200, paginationOptions);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getComments = getComments;
const createComment = async (req, res, next) => {
    try {
        const post = await Posts.getPostById(req.body.postId);
        if (!post)
            return next((0, http_errors_1.default)(400, "Post doesn't exist"));
        const comment = await Comments.createComment({
            content: req.body.content,
            postId: req.body.postId,
            authorId: req.user.id
        });
        responser_service_1.default.success(res, comment, 201);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.createComment = createComment;
const getComment = async (req, res, next) => {
    try {
        const comment = await Comments.getCommentById(req.params.commentId, req.query.includePost);
        if (!comment)
            return next((0, http_errors_1.default)(404, "Comment Not Found"));
        responser_service_1.default.success(res, comment);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.getComment = getComment;
const patchComment = async (req, res, next) => {
    try {
        const authorId = await Comments.getCommentAuthorId(req.params.commentId);
        if (!authorId)
            return next((0, http_errors_1.default)(404, "Comment Not Found"));
        if (authorId !== req.user.id)
            return next((0, http_errors_1.default)(401, "You can't edit this item"));
        const comment = await Comments.updateComment(req.params.commentId, {
            content: req.body.content,
        });
        responser_service_1.default.success(res, comment);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.patchComment = patchComment;
const deleteComment = async (req, res, next) => {
    try {
        const authorId = await Comments.getCommentAuthorId(req.params.commentId);
        if (!authorId)
            return next((0, http_errors_1.default)(404, "Comment Not Found"));
        if (authorId !== req.user.id)
            return next((0, http_errors_1.default)(401, "You can't delete this item"));
        const comment = await Comments.deleteComment(req.params.commentId);
        responser_service_1.default.success(res, comment);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.deleteComment = deleteComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMuY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9jb21tZW50cy5jb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDhEQUFnRDtBQUNoRCxvRUFBc0Q7QUFDdEQsc0ZBQTZEO0FBRTdELDhEQUEwQztBQUVuQyxNQUFNLFdBQVcsR0FBMEIsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDdkUsSUFBSTtRQUNBLE1BQU0saUJBQWlCLEdBQXNCO1lBQ3pDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUs7WUFDckIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBTTtTQUMxQixDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFO1lBQzNELE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDdEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUMxQixPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsaUJBQWlCLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDMUMsMkJBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDbkU7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUEscUJBQWUsR0FBRSxDQUFDLENBQUM7S0FDM0I7QUFDTCxDQUFDLENBQUE7QUFqQlksUUFBQSxXQUFXLGVBaUJ2QjtBQUdNLE1BQU0sYUFBYSxHQUE0QixLQUFLLEVBQUUsR0FBeUIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDakcsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsSUFBQSxxQkFBZSxFQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDekIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN2QixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUssQ0FBQyxFQUFFO1NBQ3pCLENBQUMsQ0FBQztRQUNILDJCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9DO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFBLHFCQUFlLEdBQUUsQ0FBQyxDQUFDO0tBQzNCO0FBQ0wsQ0FBQyxDQUFBO0FBZFksUUFBQSxhQUFhLGlCQWN6QjtBQUVNLE1BQU0sVUFBVSxHQUF5QixLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNyRSxJQUFJO1FBQ0EsTUFBTSxPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLElBQUksQ0FBQyxJQUFBLHFCQUFlLEVBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNyRSwyQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzFDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFBLHFCQUFlLEdBQUUsQ0FBQyxDQUFDO0tBQzNCO0FBQ0wsQ0FBQyxDQUFBO0FBVFksUUFBQSxVQUFVLGNBU3RCO0FBR00sTUFBTSxZQUFZLEdBQTJCLEtBQUssRUFBRSxHQUF3QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUM5RixJQUFJO1FBQ0EsTUFBTSxRQUFRLEdBQUcsTUFBTSxRQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDLElBQUEscUJBQWUsRUFBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksUUFBUSxLQUFLLEdBQUcsQ0FBQyxJQUFLLENBQUMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDLElBQUEscUJBQWUsRUFBQyxHQUFHLEVBQUUsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzdGLE1BQU0sT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUMvRCxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQzVCLENBQUMsQ0FBQztRQUNILDJCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDMUM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUEscUJBQWUsR0FBRSxDQUFDLENBQUM7S0FDM0I7QUFDTCxDQUFDLENBQUE7QUFiWSxRQUFBLFlBQVksZ0JBYXhCO0FBR00sTUFBTSxhQUFhLEdBQTRCLEtBQUssRUFBRSxHQUF5QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNqRyxJQUFJO1FBQ0EsTUFBTSxRQUFRLEdBQUcsTUFBTSxRQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDLElBQUEscUJBQWUsRUFBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksUUFBUSxLQUFLLEdBQUcsQ0FBQyxJQUFLLENBQUMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDLElBQUEscUJBQWUsRUFBQyxHQUFHLEVBQUUsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQy9GLE1BQU0sT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLDJCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDMUM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUEscUJBQWUsR0FBRSxDQUFDLENBQUM7S0FDM0I7QUFDTCxDQUFDLENBQUE7QUFYWSxRQUFBLGFBQWEsaUJBV3pCIn0=