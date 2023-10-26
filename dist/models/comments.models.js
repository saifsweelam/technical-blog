"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = exports.getCommentById = exports.getComments = void 0;
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
async function getCommentById(commentId) {
    const comment = await config_1.prisma.comment.findUnique({
        where: { id: commentId },
        include: { author: true }
    });
    if (!comment)
        return;
    const { author, ...commentWithoutAuthor } = comment;
    return { author: (0, users_models_1.excludePassword)(author), ...commentWithoutAuthor };
}
exports.getCommentById = getCommentById;
async function createComment(data) {
    return await config_1.prisma.comment.create({ data });
}
exports.createComment = createComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMubW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL2NvbW1lbnRzLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFFbkMsaURBQWlEO0FBRTFDLEtBQUssVUFBVSxXQUFXLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQXFCLEVBQUUsS0FBMkM7SUFDdEgsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUMzQyxLQUFLO1FBQ0wsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxFQUFFLEtBQUs7UUFDWCxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0tBQzVCLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMxQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFBLDhCQUFlLEVBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3hFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVhELGtDQVdDO0FBRU0sS0FBSyxVQUFVLGNBQWMsQ0FBQyxTQUFpQjtJQUNsRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQzVDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUU7UUFDeEIsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtLQUM1QixDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFDckIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLG9CQUFvQixFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBQSw4QkFBZSxFQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztBQUN4RSxDQUFDO0FBUkQsd0NBUUM7QUFFTSxLQUFLLFVBQVUsYUFBYSxDQUFDLElBQXNDO0lBQ3RFLE9BQU8sTUFBTSxlQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUZELHNDQUVDIn0=