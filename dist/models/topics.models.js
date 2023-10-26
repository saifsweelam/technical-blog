"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopicById = void 0;
const config_1 = require("../config");
async function getTopicById(topicId) {
    return await config_1.prisma.topic.findUnique({ where: { id: topicId } });
}
exports.getTopicById = getTopicById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNzLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy90b3BpY3MubW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFtQztBQUU1QixLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQWU7SUFDOUMsT0FBTyxNQUFNLGVBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBRkQsb0NBRUMifQ==