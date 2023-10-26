"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const zod_1 = require("zod");
const zod_express_validator_1 = require("zod-express-validator");
const _1 = require(".");
exports.login = (0, zod_express_validator_1.validate)({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8).max(32)
    })
}, _1.errorHandler);
exports.register = (0, zod_express_validator_1.validate)({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8).max(32),
        avatar: zod_1.z.string().url().optional(),
    })
}, _1.errorHandler);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC52YWxpZGF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdmFsaWRhdG9ycy9hdXRoLnZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXdCO0FBQ3hCLGlFQUFpRDtBQUNqRCx3QkFBaUM7QUFFcEIsUUFBQSxLQUFLLEdBQUcsSUFBQSxnQ0FBUSxFQUFDO0lBQzFCLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1gsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDekIsUUFBUSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztLQUN0QyxDQUFDO0NBQ0wsRUFBRSxlQUFZLENBQUMsQ0FBQztBQUlKLFFBQUEsUUFBUSxHQUFHLElBQUEsZ0NBQVEsRUFBQztJQUM3QixJQUFJLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNYLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO1FBQ2hCLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQ3pCLFFBQVEsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDbkMsTUFBTSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUU7S0FDdEMsQ0FBQztDQUNMLEVBQUUsZUFBWSxDQUFDLENBQUEifQ==