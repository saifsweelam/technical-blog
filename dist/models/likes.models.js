"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLikeByUserAndPost = exports.createLike = exports.getLikesWithPosts = exports.getLikesWithUsers = exports.getLikeByUserAndPost = void 0;
const config_1 = require("../config");
const users_models_1 = require("./users.models");
async function getLikeByUserAndPost(userId, postId) {
    return await config_1.prisma.like.findFirst({ where: { userId, postId } });
}
exports.getLikeByUserAndPost = getLikeByUserAndPost;
async function getLikesWithUsers({ page = 1, count = 10 }, where) {
    const likes = await config_1.prisma.like.findMany({
        where,
        skip: count * (page - 1),
        take: count,
        include: { user: true },
    });
    return likes.map(like => {
        const { user, ...likeWithoutUser } = like;
        return { user: (0, users_models_1.excludePassword)(user), ...likeWithoutUser };
    });
}
exports.getLikesWithUsers = getLikesWithUsers;
async function getLikesWithPosts({ page = 1, count = 10 }, where) {
    return await config_1.prisma.like.findMany({
        where,
        skip: count * (page - 1),
        take: count,
        include: { post: true }
    });
}
exports.getLikesWithPosts = getLikesWithPosts;
async function createLike(data) {
    return await config_1.prisma.like.create({ data });
}
exports.createLike = createLike;
async function deleteLikeByUserAndPost(userId, postId) {
    return await config_1.prisma.like.deleteMany({ where: { userId, postId } });
}
exports.deleteLikeByUserAndPost = deleteLikeByUserAndPost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZXMubW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL2xpa2VzLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFDbkMsaURBQWlEO0FBRzFDLEtBQUssVUFBVSxvQkFBb0IsQ0FBRSxNQUFjLEVBQUUsTUFBYztJQUN0RSxPQUFPLE1BQU0sZUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFGRCxvREFFQztBQUVNLEtBQUssVUFBVSxpQkFBaUIsQ0FBRSxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBcUIsRUFBRSxLQUF3QztJQUMxSCxNQUFNLEtBQUssR0FBRyxNQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLEtBQUs7UUFDTCxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLEVBQUUsS0FBSztRQUNYLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7S0FDMUIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDMUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFBLDhCQUFlLEVBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFYRCw4Q0FXQztBQUVNLEtBQUssVUFBVSxpQkFBaUIsQ0FBRSxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBcUIsRUFBRSxLQUF1QztJQUN6SCxPQUFPLE1BQU0sZUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsS0FBSztRQUNMLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksRUFBRSxLQUFLO1FBQ1gsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtLQUMxQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBUEQsOENBT0M7QUFFTSxLQUFLLFVBQVUsVUFBVSxDQUFFLElBQW1DO0lBQ2pFLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUZELGdDQUVDO0FBRU0sS0FBSyxVQUFVLHVCQUF1QixDQUFFLE1BQWMsRUFBRSxNQUFjO0lBQ3pFLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUZELDBEQUVDIn0=