"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationFields = exports.idParamsValidator = exports.errorHandler = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const zod_1 = require("zod");
function errorHandler(errors, res) {
    throw (0, http_errors_1.default)(400, "Validation Error", errors);
}
exports.errorHandler = errorHandler;
function idParamsValidator(...params) {
    return zod_1.z.object(Object.fromEntries(params.map(param => [param, zod_1.z.coerce.number().int()])));
}
exports.idParamsValidator = idParamsValidator;
exports.paginationFields = {
    page: zod_1.z.coerce.number().int().default(1),
    count: zod_1.z.coerce.number().int().default(10)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi92YWxpZGF0b3JzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLDhEQUF5RDtBQUN6RCw2QkFBd0I7QUFXeEIsU0FBZ0IsWUFBWSxDQUFFLE1BQXNDLEVBQUUsR0FBYTtJQUMvRSxNQUFNLElBQUEscUJBQWUsRUFBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUZELG9DQUVDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQW9CLEdBQUcsTUFBVztJQUMvRCxPQUFPLE9BQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQThCLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBRkQsOENBRUM7QUFFWSxRQUFBLGdCQUFnQixHQUFHO0lBQzVCLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEMsS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztDQUM3QyxDQUFBIn0=