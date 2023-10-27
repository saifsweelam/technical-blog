"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.patchComment = exports.getComment = exports.createComment = exports.getComments = void 0;
const zod_1 = require("zod");
const zod_express_validator_1 = require("zod-express-validator");
const _1 = require(".");
exports.getComments = (0, zod_express_validator_1.validate)({
    query: zod_1.z.object({
        q: zod_1.z.string().optional(),
        author: zod_1.z.coerce.number().int().optional(),
        post: zod_1.z.coerce.number().int().optional(),
        ..._1.paginationFields
    })
}, _1.errorHandler);
exports.createComment = (0, zod_express_validator_1.validate)({
    body: zod_1.z.object({
        content: zod_1.z.string(),
        postId: zod_1.z.number().int()
    })
}, _1.errorHandler);
exports.getComment = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("commentId"),
    query: zod_1.z.object({
        includePost: zod_1.z.coerce.boolean().default(false)
    })
}, _1.errorHandler);
exports.patchComment = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("commentId"),
    body: zod_1.z.object({
        content: zod_1.z.string().optional(),
    })
}, _1.errorHandler);
exports.deleteComment = (0, zod_express_validator_1.validate)({
    params: (0, _1.idParamsValidator)("commentId")
}, _1.errorHandler);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMudmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvY29tbWVudHMudmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBd0I7QUFDeEIsaUVBQWlEO0FBQ2pELHdCQUFzRTtBQUV6RCxRQUFBLFdBQVcsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDaEMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7UUFDWixDQUFDLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUN4QixNQUFNLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDMUMsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ3hDLEdBQUcsbUJBQWdCO0tBQ3RCLENBQUM7Q0FDTCxFQUFFLGVBQVksQ0FBQyxDQUFDO0FBSUosUUFBQSxhQUFhLEdBQUcsSUFBQSxnQ0FBUSxFQUFDO0lBQ2xDLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1gsT0FBTyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7UUFDbkIsTUFBTSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7S0FDM0IsQ0FBQztDQUNMLEVBQUUsZUFBWSxDQUFDLENBQUM7QUFJSixRQUFBLFVBQVUsR0FBRyxJQUFBLGdDQUFRLEVBQUM7SUFDL0IsTUFBTSxFQUFFLElBQUEsb0JBQWlCLEVBQUMsV0FBVyxDQUFDO0lBQ3RDLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1osV0FBVyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUNqRCxDQUFDO0NBQ0wsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsWUFBWSxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNqQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxXQUFXLENBQUM7SUFDdEMsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUM7UUFDWCxPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtLQUNqQyxDQUFDO0NBQ0wsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsYUFBYSxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUNsQyxNQUFNLEVBQUUsSUFBQSxvQkFBaUIsRUFBQyxXQUFXLENBQUM7Q0FDekMsRUFBRSxlQUFZLENBQUMsQ0FBQyJ9