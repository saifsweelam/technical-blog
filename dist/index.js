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
const auth_middlewares_1 = require("./middlewares/auth.middlewares");
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
// JSON Body Parser
app.use(express_1.default.json());
// Add User to Request if Available
app.use(auth_middlewares_1.userMiddleware);
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
        statusCode: err.statusCode || 500,
        error: err,
    };
    res.status(err.statusCode || 500).json(response);
});
app.listen(config_1.port, () => console.log(`Listening on port ${config_1.port}`));
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE0RTtBQUM1RSw4REFBeUQ7QUFDekQsb0RBQTRCO0FBQzVCLGdEQUF3QjtBQUV4QixxQ0FBZ0M7QUFFaEMscUVBQWdFO0FBRWhFLHVFQUE4QztBQUM5QywrRUFBc0Q7QUFDdEQseUVBQWdEO0FBQ2hELDJFQUFrRDtBQUNsRCx5RUFBZ0Q7QUFFaEQseUJBQXlCO0FBQ3pCLE1BQU0sR0FBRyxHQUFZLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRS9CLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRXZCLDBCQUEwQjtBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztBQUVoQixtQkFBbUI7QUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFeEIsbUNBQW1DO0FBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxDQUFDO0FBRXhCLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxxQkFBVSxDQUFDLENBQUM7QUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUscUJBQVUsQ0FBQyxDQUFDO0FBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHlCQUFjLENBQUMsQ0FBQztBQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxzQkFBVyxDQUFDLENBQUM7QUFDL0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsdUJBQVksQ0FBQyxDQUFDO0FBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHNCQUFXLENBQUMsQ0FBQztBQUUvQixjQUFjO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ3hELElBQUksQ0FBQyxJQUFBLHFCQUFlLEVBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUVGLGlCQUFpQjtBQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBYyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBUSxFQUFFO0lBQzlFLE1BQU0sUUFBUSxHQUFnQjtRQUMxQixPQUFPLEVBQUUsS0FBSztRQUNkLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUc7UUFDakMsS0FBSyxFQUFFLEdBQUc7S0FDYixDQUFBO0lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLGFBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVqRSxrQkFBZSxHQUFHLENBQUMifQ==