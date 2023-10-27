"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostLike = exports.createPostLike = exports.getPostLikes = exports.createPostComment = exports.getPostComments = exports.deletePost = exports.patchPost = exports.getPost = exports.createPost = exports.getPosts = void 0;
const zod_1 = require("zod");
const zod_express_validator_1 = require("zod-express-validator");
const _1 = require(".");
exports.getPosts = (0, zod_express_validator_1.validate)({
    query: zod_1.z.object({
        q: zod_1.z.string().optional(),
        author: zod_1.z.coerce.number().int().optional(),
        topic: zod_1.z.coerce.number().int().optional(),
        ..._1.paginationFields
    })
}, _1.errorHandler);
exports.createPost = (0, zod_express_validator_1.validate)({
    body: zod_1.z.object({
        content: zod_1.z.string(),
        thumbnail: zod_1.z.string().url().optional(),
        topicId: zod_1.z.number().int()
    })
}, _1.errorHandler);
exports.getPost = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("postId")
}, _1.errorHandler);
exports.patchPost = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("postId"),
    body: zod_1.z.object({
        content: zod_1.z.string().optional(),
        thumbnail: zod_1.z.string().url().optional(),
        topicId: zod_1.z.number().int().optional()
    })
}, _1.errorHandler);
exports.deletePost = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("postId")
}, _1.errorHandler);
exports.getPostComments = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("postId"),
    query: zod_1.z.object(_1.paginationFields)
}, _1.errorHandler);
exports.createPostComment = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("postId"),
    body: zod_1.z.object({
        content: zod_1.z.string()
    })
}, _1.errorHandler);
exports.getPostLikes = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("postId"),
    query: zod_1.z.object(_1.paginationFields)
}, _1.errorHandler);
exports.createPostLike = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("postId")
}, _1.errorHandler);
exports.deletePostLike = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("postId")
}, _1.errorHandler);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMudmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvcG9zdHMudmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBd0I7QUFDeEIsaUVBQWlEO0FBQ2pELHdCQUFzRTtBQUV6RCxRQUFBLFFBQVEsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDN0IsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7UUFDWixDQUFDLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUN4QixNQUFNLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDMUMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ3pDLEdBQUcsbUJBQWdCO0tBQ3RCLENBQUM7Q0FDTCxFQUFFLGVBQVksQ0FBQyxDQUFDO0FBSUosUUFBQSxVQUFVLEdBQUcsSUFBQSxnQ0FBUSxFQUFDO0lBQy9CLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1gsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7UUFDbkIsU0FBUyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDdEMsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7S0FDNUIsQ0FBQztDQUNMLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLE9BQU8sR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDNUIsTUFBTSxFQUFFLElBQUEsb0JBQWlCLEVBQUMsUUFBUSxDQUFDO0NBQ3RDLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLFNBQVMsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDOUIsTUFBTSxFQUFFLElBQUEsb0JBQWlCLEVBQUMsUUFBUSxDQUFDO0lBQ25DLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1gsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDOUIsU0FBUyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDdEMsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDdkMsQ0FBQztDQUNMLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLFVBQVUsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDL0IsTUFBTSxFQUFFLElBQUEsb0JBQWlCLEVBQUMsUUFBUSxDQUFDO0NBQ3RDLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLGVBQWUsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDcEMsTUFBTSxFQUFFLElBQUEsb0JBQWlCLEVBQUMsUUFBUSxDQUFDO0lBQ25DLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFnQixDQUFDO0NBQ3BDLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLGlCQUFpQixHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUN0QyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxRQUFRLENBQUM7SUFDbkMsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7UUFDWCxPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtLQUN0QixDQUFDO0NBQ0wsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsWUFBWSxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNqQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxRQUFRLENBQUM7SUFDbkMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsbUJBQWdCLENBQUM7Q0FDcEMsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsY0FBYyxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNuQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxRQUFRLENBQUM7Q0FDdEMsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsY0FBYyxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNuQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxRQUFRLENBQUM7Q0FDdEMsRUFBRSxlQUFZLENBQUMsQ0FBQyJ9