"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const zod_1 = require("zod");
const zod_express_validator_1 = require("zod-express-validator");
const _1 = require(".");
class LoginValidator {
    constructor() {
        this.bodySchema = zod_1.z.object({
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(8).max(32)
        });
    }
    validate() {
        return (0, zod_express_validator_1.validate)({ body: this.bodySchema }, _1.errorHandler);
    }
}
exports.login = new LoginValidator().validate();
class RegisterValidator {
    constructor() {
        this.bodySchema = zod_1.z.object({
            name: zod_1.z.string(),
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(8).max(32),
            avatar: zod_1.z.string().url().optional(),
        });
    }
    validate() {
        return (0, zod_express_validator_1.validate)({ body: this.bodySchema }, _1.errorHandler);
    }
}
exports.register = new RegisterValidator().validate();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC52YWxpZGF0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdmFsaWRhdG9ycy9hdXRoLnZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQXdCO0FBQ3hCLGlFQUFpRDtBQUNqRCx3QkFBNEM7QUFFNUMsTUFBTSxjQUFjO0lBQXBCO1FBQ0ksZUFBVSxHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDekIsUUFBUSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUN0QyxDQUFDLENBQUE7SUFLTixDQUFDO0lBSEcsUUFBUTtRQUNKLE9BQU8sSUFBQSxnQ0FBUSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxlQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFFWSxRQUFBLEtBQUssR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBR3JELE1BQU0saUJBQWlCO0lBQXZCO1FBQ0ksZUFBVSxHQUFHLE9BQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUU7WUFDaEIsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDekIsUUFBUSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNuQyxNQUFNLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRTtTQUN0QyxDQUFDLENBQUE7SUFLTixDQUFDO0lBSEcsUUFBUTtRQUNKLE9BQU8sSUFBQSxnQ0FBUSxFQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxlQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFFWSxRQUFBLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMifQ==