"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const comments_routes_1 = __importDefault(require("./routes/comments.routes"));
const posts_routes_1 = __importDefault(require("./routes/posts.routes"));
const topics_routes_1 = __importDefault(require("./routes/topics.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
// Initialize Application
const app = (0, express_1.default)();
// Use Logger
app.use((0, morgan_1.default)('dev'));
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
    res.status(err.statusCode).json({
        success: false,
        statusCode: err.statusCode,
        error: err
    });
});
app.listen(config_1.default.port, () => console.log(`Listening on port ${config_1.default.port}`));
exports.default = app;
