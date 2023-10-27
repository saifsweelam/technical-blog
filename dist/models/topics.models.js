"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTopic = exports.getTopics = exports.getTopicById = void 0;
const config_1 = require("../config");
async function getTopicById(topicId, includePosts = false) {
    return await config_1.prisma.topic.findUnique({ where: { id: topicId }, include: { posts: includePosts } });
}
exports.getTopicById = getTopicById;
async function getTopics({ page = 1, count = 10 }, where) {
    return await config_1.prisma.topic.findMany({ where, skip: count * (page - 1), take: count });
}
exports.getTopics = getTopics;
async function createTopic(data) {
    return await config_1.prisma.topic.create({ data });
}
exports.createTopic = createTopic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNzLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbIm1vZGVscy90b3BpY3MubW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFtQztBQUU1QixLQUFLLFVBQVUsWUFBWSxDQUFFLE9BQWUsRUFBRSxlQUF3QixLQUFLO0lBQzlFLE9BQU8sTUFBTSxlQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZHLENBQUM7QUFGRCxvQ0FFQztBQUVNLEtBQUssVUFBVSxTQUFTLENBQUUsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUF5QztJQUNoRyxPQUFPLE1BQU0sZUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtBQUN4RixDQUFDO0FBRkQsOEJBRUM7QUFFTSxLQUFLLFVBQVUsV0FBVyxDQUFFLElBQW9DO0lBQ25FLE9BQU8sTUFBTSxlQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELGtDQUVDIn0=