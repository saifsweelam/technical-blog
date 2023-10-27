"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostAuthorId = exports.getFullPostById = exports.getPostById = exports.getPosts = void 0;
const config_1 = require("../config");
const users_models_1 = require("./users.models");
async function getPosts({ page = 1, count = 10 }, where) {
    return await config_1.prisma.post.findMany({ where, skip: count * (page - 1), take: count });
}
exports.getPosts = getPosts;
async function getPostById(postId) {
    return await config_1.prisma.post.findUnique({ where: { id: postId } });
}
exports.getPostById = getPostById;
async function getFullPostById(postId, view = true) {
    try {
        const post = await config_1.prisma.post.update({
            where: { id: postId },
            include: {
                author: true,
                topic: true,
                comments: { include: { author: true } },
                _count: { select: { likes: true } },
            },
            data: {
                views: { increment: +view }
            },
        });
        const { author, comments, ...postWithoutAuthorAndComments } = post;
        const mappedComments = comments.map(comment => {
            const { author, ...commentWithoutAuthor } = comment;
            return { author: (0, users_models_1.excludePassword)(author), ...commentWithoutAuthor };
        });
        return { author: (0, users_models_1.excludePassword)(author), comments: mappedComments, ...postWithoutAuthorAndComments };
    }
    catch {
        return;
    }
}
exports.getFullPostById = getFullPostById;
async function getPostAuthorId(postId) {
    return (await config_1.prisma.post.findUnique({ where: { id: postId }, select: { authorId: true } }))?.authorId;
}
exports.getPostAuthorId = getPostAuthorId;
async function createPost(data) {
    try {
        return await config_1.prisma.post.create({ data });
    }
    catch {
        return;
    }
}
exports.createPost = createPost;
async function updatePost(postId, data) {
    return await config_1.prisma.post.update({ where: { id: postId }, data });
}
exports.updatePost = updatePost;
async function deletePost(postId) {
    try {
        return await config_1.prisma.post.delete({ where: { id: postId } });
    }
    catch {
        return;
    }
}
exports.deletePost = deletePost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMubW9kZWxzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWxzL3Bvc3RzLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFFbkMsaURBQWlEO0FBRTFDLEtBQUssVUFBVSxRQUFRLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQXFCLEVBQUUsS0FBd0M7SUFDaEgsT0FBTyxNQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDeEYsQ0FBQztBQUZELDRCQUVDO0FBRU0sS0FBSyxVQUFVLFdBQVcsQ0FBQyxNQUFjO0lBQzVDLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUZELGtDQUVDO0FBRU0sS0FBSyxVQUFVLGVBQWUsQ0FBRSxNQUFjLEVBQUUsT0FBZ0IsSUFBSTtJQUN2RSxJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO1lBQ3JCLE9BQU8sRUFBRTtnQkFDTCxNQUFNLEVBQUUsSUFBSTtnQkFDWixLQUFLLEVBQUUsSUFBSTtnQkFDWCxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3ZDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTthQUN0QztZQUNELElBQUksRUFBRTtnQkFDRixLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUU7YUFDOUI7U0FDSixDQUFDLENBQUM7UUFDSCxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLDRCQUE0QixFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ25FLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLG9CQUFvQixFQUFFLEdBQUcsT0FBTyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBQSw4QkFBZSxFQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBQSw4QkFBZSxFQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyw0QkFBNEIsRUFBRSxDQUFDO0tBQ3pHO0lBQUMsTUFBTTtRQUNKLE9BQU87S0FDVjtBQUNMLENBQUM7QUF2QkQsMENBdUJDO0FBRU0sS0FBSyxVQUFVLGVBQWUsQ0FBRSxNQUFjO0lBQ2pELE9BQU8sQ0FBQyxNQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7QUFDM0csQ0FBQztBQUZELDBDQUVDO0FBRU0sS0FBSyxVQUFVLFVBQVUsQ0FBQyxJQUFtQztJQUNoRSxJQUFJO1FBQ0EsT0FBTyxNQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUM3QztJQUFDLE1BQU07UUFDSixPQUFPO0tBQ1Y7QUFDTCxDQUFDO0FBTkQsZ0NBTUM7QUFFTSxLQUFLLFVBQVUsVUFBVSxDQUFDLE1BQWMsRUFBRSxJQUFtQztJQUNoRixPQUFPLE1BQU0sZUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRkQsZ0NBRUM7QUFFTSxLQUFLLFVBQVUsVUFBVSxDQUFDLE1BQWM7SUFDM0MsSUFBSTtRQUNBLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDOUQ7SUFBQyxNQUFNO1FBQ0osT0FBTztLQUNWO0FBQ0wsQ0FBQztBQU5ELGdDQU1DIn0=