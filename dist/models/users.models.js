"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludePassword = exports.createUser = exports.getUserByEmail = exports.getUserById = void 0;
const config_1 = require("../config");
async function getUserById(userId) {
    return await config_1.prisma.user.findUnique({ where: { id: userId } });
}
exports.getUserById = getUserById;
async function getUserByEmail(email) {
    return await config_1.prisma.user.findUnique({ where: { email } });
}
exports.getUserByEmail = getUserByEmail;
async function createUser(data) {
    return await config_1.prisma.user.create({ data });
}
exports.createUser = createUser;
function excludePassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
exports.excludePassword = excludePassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3VzZXJzLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFFNUIsS0FBSyxVQUFVLFdBQVcsQ0FBQyxNQUFjO0lBQzVDLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUZELGtDQUVDO0FBRU0sS0FBSyxVQUFVLGNBQWMsQ0FBQyxLQUFhO0lBQzlDLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRkQsd0NBRUM7QUFFTSxLQUFLLFVBQVUsVUFBVSxDQUFDLElBQW1DO0lBQ2hFLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLElBQVU7SUFDdEMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLG1CQUFtQixFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ2xELE9BQU8sbUJBQW1CLENBQUM7QUFDL0IsQ0FBQztBQUhELDBDQUdDIn0=