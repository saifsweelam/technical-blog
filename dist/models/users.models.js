"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludePassword = exports.createUser = exports.getUsers = exports.getUserByEmail = exports.getUserById = void 0;
const config_1 = require("../config");
async function getUserById(userId, includePosts = false) {
    return await config_1.prisma.user.findUnique({ where: { id: userId }, include: { posts: includePosts } });
}
exports.getUserById = getUserById;
async function getUserByEmail(email) {
    return await config_1.prisma.user.findUnique({ where: { email } });
}
exports.getUserByEmail = getUserByEmail;
async function getUsers({ page = 1, count = 10 }, where) {
    const users = await config_1.prisma.user.findMany({ where, skip: count * (page - 1), take: count });
    return users.map(excludePassword);
}
exports.getUsers = getUsers;
async function createUser(data) {
    return await config_1.prisma.user.create({ data });
}
exports.createUser = createUser;
function excludePassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
exports.excludePassword = excludePassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kZWxzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibW9kZWxzL3VzZXJzLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFHNUIsS0FBSyxVQUFVLFdBQVcsQ0FBQyxNQUFjLEVBQUUsZUFBd0IsS0FBSztJQUMzRSxPQUFPLE1BQU0sZUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyRyxDQUFDO0FBRkQsa0NBRUM7QUFFTSxLQUFLLFVBQVUsY0FBYyxDQUFDLEtBQWE7SUFDOUMsT0FBTyxNQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFGRCx3Q0FFQztBQUVNLEtBQUssVUFBVSxRQUFRLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQXFCLEVBQUUsS0FBd0M7SUFDaEgsTUFBTSxLQUFLLEdBQUcsTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBSEQsNEJBR0M7QUFFTSxLQUFLLFVBQVUsVUFBVSxDQUFDLElBQW1DO0lBQ2hFLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLElBQVU7SUFDdEMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ2xELE9BQU8sbUJBQW1CLENBQUM7QUFDL0IsQ0FBQztBQUhELDBDQUdDIn0=