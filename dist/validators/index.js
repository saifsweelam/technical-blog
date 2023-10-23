"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
function errorHandler(errors, res) {
    throw (0, http_errors_1.default)(400, "Validation Error", errors);
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi92YWxpZGF0b3JzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLDhEQUFxRDtBQXFCckQsU0FBZ0IsWUFBWSxDQUFFLE1BQXNDLEVBQUUsR0FBYTtJQUMvRSxNQUFNLElBQUEscUJBQVcsRUFBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUZELG9DQUVDIn0=