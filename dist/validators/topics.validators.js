"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopicPost = exports.createTopicPost = exports.getTopicPosts = exports.getTopic = exports.createTopic = exports.getTopics = void 0;
const zod_1 = require("zod");
const zod_express_validator_1 = require("zod-express-validator");
const _1 = require(".");
exports.getTopics = (0, zod_express_validator_1.validate)({
    query: zod_1.z.object(_1.paginationFields)
}, _1.errorHandler);
exports.createTopic = (0, zod_express_validator_1.validate)({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        icon: zod_1.z.string().url()
    })
}, _1.errorHandler);
exports.getTopic = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("topicId"),
    query: zod_1.z.object({
        includePosts: zod_1.z.coerce.boolean().default(false)
    })
}, _1.errorHandler);
exports.getTopicPosts = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("topicId"),
    query: zod_1.z.object({
        q: zod_1.z.string().optional(),
        author: zod_1.z.coerce.number().int().optional(),
        ..._1.paginationFields
    })
}, _1.errorHandler);
exports.createTopicPost = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("topicId"),
    body: zod_1.z.object({
        title: zod_1.z.string(),
        content: zod_1.z.string(),
        thumbnail: zod_1.z.string().url().optional(),
    })
}, _1.errorHandler);
exports.getTopicPost = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("topicId", "postId"),
    query: zod_1.z.object({
        full: zod_1.z.coerce.boolean().default(false)
    })
}, _1.errorHandler);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNzLnZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJ2YWxpZGF0b3JzL3RvcGljcy52YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZCQUF3QjtBQUN4QixpRUFBaUQ7QUFDakQsd0JBQXNFO0FBRXpELFFBQUEsU0FBUyxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUM5QixLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBZ0IsQ0FBQztDQUNwQyxFQUFFLGVBQVksQ0FBQyxDQUFDO0FBSUosUUFBQSxXQUFXLEdBQUcsSUFBQSxnQ0FBUSxFQUFDO0lBQ2hDLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1gsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7UUFDaEIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7S0FDekIsQ0FBQztDQUNMLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLFFBQVEsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDN0IsTUFBTSxFQUFFLElBQUEsb0JBQWlCLEVBQUMsU0FBUyxDQUFDO0lBQ3BDLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1osWUFBWSxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUNsRCxDQUFDO0NBQ0wsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsYUFBYSxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNsQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxTQUFTLENBQUM7SUFDcEMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7UUFDWixDQUFDLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUN4QixNQUFNLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDMUMsR0FBRyxtQkFBZ0I7S0FDdEIsQ0FBQztDQUNMLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLGVBQWUsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDcEMsTUFBTSxFQUFFLElBQUEsb0JBQWlCLEVBQUMsU0FBUyxDQUFDO0lBQ3BDLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1gsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7UUFDakIsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7UUFDbkIsU0FBUyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDekMsQ0FBQztDQUNMLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLFlBQVksR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDakMsTUFBTSxFQUFFLElBQUEsb0JBQWlCLEVBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztJQUM5QyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNaLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDMUMsQ0FBQztDQUNMLEVBQUUsZUFBWSxDQUFDLENBQUMifQ==