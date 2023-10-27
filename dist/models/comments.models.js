"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getCommentAuthorId = exports.getCommentById = exports.getComments = void 0;
const config_1 = require("../config");
const users_models_1 = require("./users.models");
async function getComments({ page = 1, count = 10 }, where) {
    const comments = await config_1.prisma.comment.findMany({
        where,
        skip: count * (page - 1),
        take: count,
        include: { author: true }
    });
    return comments.map(comment => {
        const { author, ...commentWithoutAuthor } = comment;
        return { author: (0, users_models_1.excludePassword)(author), ...commentWithoutAuthor };
    });
}
exports.getComments = getComments;
async function getCommentById(commentId, includePost = false) {
    const comment = await config_1.prisma.comment.findUnique({
        where: { id: commentId },
        include: { author: true, post: includePost }
    });
    if (!comment)
        return;
    const { author, ...commentWithoutAuthor } = comment;
    return { author: (0, users_models_1.excludePassword)(author), ...commentWithoutAuthor };
}
exports.getCommentById = getCommentById;
async function getCommentAuthorId(commentId) {
    return (await config_1.prisma.comment.findUnique({ where: { id: commentId }, select: { authorId: true } }))?.authorId;
}
exports.getCommentAuthorId = getCommentAuthorId;
async function createComment(data) {
    return await config_1.prisma.comment.create({ data });
}
exports.createComment = createComment;
async function updateComment(commentId, data) {
    try {
        return await config_1.prisma.comment.update({ where: { id: commentId }, data });
    }
    catch {
        return;
    }
}
exports.updateComment = updateComment;
async function deleteComment(commentId) {
    try {
        return await config_1.prisma.comment.delete({ where: { id: commentId } });
    }
    catch {
        return;
    }
}
exports.deleteComment = deleteComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMubW9kZWxzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWxzL2NvbW1lbnRzLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFFbkMsaURBQWlEO0FBRTFDLEtBQUssVUFBVSxXQUFXLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQXFCLEVBQUUsS0FBMkM7SUFDdEgsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUMzQyxLQUFLO1FBQ0wsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxFQUFFLEtBQUs7UUFDWCxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0tBQzVCLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMxQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFBLDhCQUFlLEVBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3hFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVhELGtDQVdDO0FBRU0sS0FBSyxVQUFVLGNBQWMsQ0FBQyxTQUFpQixFQUFFLGNBQXVCLEtBQUs7SUFDaEYsTUFBTSxPQUFPLEdBQUcsTUFBTSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO1FBQ3hCLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtLQUMvQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFDckIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLG9CQUFvQixFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBQSw4QkFBZSxFQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztBQUN4RSxDQUFDO0FBUkQsd0NBUUM7QUFFTSxLQUFLLFVBQVUsa0JBQWtCLENBQUMsU0FBaUI7SUFDdEQsT0FBTyxDQUFDLE1BQU0sZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQztBQUNqSCxDQUFDO0FBRkQsZ0RBRUM7QUFFTSxLQUFLLFVBQVUsYUFBYSxDQUFDLElBQXNDO0lBQ3RFLE9BQU8sTUFBTSxlQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUZELHNDQUVDO0FBRU0sS0FBSyxVQUFVLGFBQWEsQ0FBQyxTQUFpQixFQUFFLElBQXNDO0lBQ3pGLElBQUk7UUFDQSxPQUFPLE1BQU0sZUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUMxRTtJQUFDLE1BQU07UUFDSixPQUFPO0tBQ1Y7QUFDTCxDQUFDO0FBTkQsc0NBTUM7QUFFTSxLQUFLLFVBQVUsYUFBYSxDQUFDLFNBQWlCO0lBQ2pELElBQUk7UUFDQSxPQUFPLE1BQU0sZUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3BFO0lBQUMsTUFBTTtRQUNKLE9BQU87S0FDVjtBQUNMLENBQUM7QUFORCxzQ0FNQyJ9