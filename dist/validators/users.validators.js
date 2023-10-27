"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserLikes = exports.getUserComments = exports.getUserPost = exports.getUserPosts = exports.getUser = exports.getUsers = void 0;
const zod_1 = require("zod");
const zod_express_validator_1 = require("zod-express-validator");
const _1 = require(".");
exports.getUsers = (0, zod_express_validator_1.validate)({
    query: zod_1.z.object({
        q: zod_1.z.string().optional(),
        ..._1.paginationFields
    })
}, _1.errorHandler);
exports.getUser = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("userId"),
    query: zod_1.z.object({
        includePosts: zod_1.z.coerce.boolean().default(false)
    })
}, _1.errorHandler);
exports.getUserPosts = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("userId"),
    query: zod_1.z.object({
        q: zod_1.z.string().optional(),
        topic: zod_1.z.coerce.number().int().optional(),
        ..._1.paginationFields
    })
}, _1.errorHandler);
exports.getUserPost = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("userId", "postId"),
    query: zod_1.z.object({
        full: zod_1.z.coerce.boolean().default(false)
    })
}, _1.errorHandler);
exports.getUserComments = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("userId"),
    query: zod_1.z.object(_1.paginationFields)
}, _1.errorHandler);
exports.getUserLikes = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("userId"),
    query: zod_1.z.object(_1.paginationFields)
}, _1.errorHandler);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMudmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvdXNlcnMudmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBd0I7QUFDeEIsaUVBQWlEO0FBQ2pELHdCQUFzRTtBQUV6RCxRQUFBLFFBQVEsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDN0IsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7UUFDWixDQUFDLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUN4QixHQUFHLG1CQUFnQjtLQUN0QixDQUFDO0NBQ0wsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsT0FBTyxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUM1QixNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxRQUFRLENBQUM7SUFDbkMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7UUFDWixZQUFZLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0tBQ2xELENBQUM7Q0FDTCxFQUFFLGVBQVksQ0FBQyxDQUFDO0FBSUosUUFBQSxZQUFZLEdBQUcsSUFBQSxnQ0FBUSxFQUFDO0lBQ2pDLE1BQU0sRUFBRSxJQUFBLG9CQUFpQixFQUFDLFFBQVEsQ0FBQztJQUNuQyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNaLENBQUMsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ3hCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUN6QyxHQUFHLG1CQUFnQjtLQUN0QixDQUFDO0NBQ0wsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsV0FBVyxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNoQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzdDLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1osSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUMxQyxDQUFDO0NBQ0wsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsZUFBZSxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNwQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxRQUFRLENBQUM7SUFDbkMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsbUJBQWdCLENBQUM7Q0FDcEMsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsWUFBWSxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNqQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxRQUFRLENBQUM7SUFDbkMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsbUJBQWdCLENBQUM7Q0FDcEMsRUFBRSxlQUFZLENBQUMsQ0FBQyJ9