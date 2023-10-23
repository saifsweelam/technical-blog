"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const comments_routes_1 = __importDefault(require("./routes/comments.routes"));
const posts_routes_1 = __importDefault(require("./routes/posts.routes"));
const topics_routes_1 = __importDefault(require("./routes/topics.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
// Initialize Application
const app = (0, express_1.default)();
// Use Logger
app.use((0, morgan_1.default)('dev'));
// CORS Headers Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Set Routes
app.use('/', auth_routes_1.default);
app.use('/auth', auth_routes_1.default);
app.use('/comments', comments_routes_1.default);
app.use('/posts', posts_routes_1.default);
app.use('/topics', topics_routes_1.default);
app.use('/users', users_routes_1.default);
// 404 Handler
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404, "Resource Not Found"));
});
// Errors Handler
app.use((err, req, res, next) => {
    const response = {
        success: false,
        statusCode: err.statusCode,
        error: err,
    };
    res.status(err.statusCode).json(response);
});
app.listen(config_1.port, () => console.log(`Listening on port ${config_1.port}`));
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE0RTtBQUM1RSw4REFBcUQ7QUFDckQsb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUV4QixxQ0FBZ0M7QUFHaEMsdUVBQThDO0FBQzlDLCtFQUFzRDtBQUN0RCx5RUFBZ0Q7QUFDaEQsMkVBQWtEO0FBQ2xELHlFQUFnRDtBQUVoRCx5QkFBeUI7QUFDekIsTUFBTSxHQUFHLEdBQVksSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFL0IsYUFBYTtBQUNiLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxnQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFdkIsMEJBQTBCO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxxQkFBVSxDQUFDLENBQUM7QUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUscUJBQVUsQ0FBQyxDQUFDO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHlCQUFjLENBQUMsQ0FBQztBQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxzQkFBVyxDQUFDLENBQUM7QUFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsdUJBQVksQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHNCQUFXLENBQUMsQ0FBQztBQUUvQixjQUFjO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ3hELElBQUksQ0FBQyxJQUFBLHFCQUFXLEVBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDLENBQUMsQ0FBQTtBQUVGLGlCQUFpQjtBQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBYyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBUSxFQUFFO0lBQzlFLE1BQU0sUUFBUSxHQUEyQjtRQUNyQyxPQUFPLEVBQUUsS0FBSztRQUNkLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtRQUMxQixLQUFLLEVBQUUsR0FBRztLQUNiLENBQUE7SUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLGFBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixhQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFakUsa0JBQWUsR0FBRyxDQUFDIn0=