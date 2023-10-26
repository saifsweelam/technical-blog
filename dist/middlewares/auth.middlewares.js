"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresAuth = exports.userMiddleware = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const jwt_service_1 = __importDefault(require("../services/jwt.service"));
const responser_service_1 = __importDefault(require("../services/responser.service"));
const users_models_1 = require("../models/users.models");
const userMiddleware = (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader)
            return next();
        const parts = authHeader.split(" ");
        if (parts.length < 2)
            return next();
        const token = parts[1];
        const user = jwt_service_1.default.decryptAccessToken(token);
        if (!user)
            return next();
        req.user = user;
        return next();
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.userMiddleware = userMiddleware;
const requiresAuth = (req, res, next) => {
    if (!req.user)
        return checkRefreshToken(req, res, next);
    return next();
};
exports.requiresAuth = requiresAuth;
const checkRefreshToken = async (req, res, next, err = (0, http_errors_1.default)(401)) => {
    const token = req.cookies?.refreshToken;
    if (!token)
        return next(err);
    const userId = jwt_service_1.default.decryptRefreshToken(token);
    if (!userId)
        return next(err);
    const user = await (0, users_models_1.getUserById)(userId);
    if (!user)
        return next(err);
    const accessToken = jwt_service_1.default.generateAccessToken(user);
    const refreshToken = jwt_service_1.default.generateRefreshToken(user.id);
    res.cookie("refreshToken", refreshToken, { maxAge: 3.516e10, httpOnly: true });
    return responser_service_1.default.success(res, { user: (0, users_models_1.excludePassword)(user), accessToken });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21pZGRsZXdhcmVzL2F1dGgubWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDBFQUFpRDtBQUNqRCxzRkFBNkQ7QUFFN0QseURBQTRFO0FBSXJFLE1BQU0sY0FBYyxHQUFtQixDQUFDLEdBQXNCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2hGLElBQUk7UUFDQSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUMvQixNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxJQUFJLEdBQUcscUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDekIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNqQjtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBQSxxQkFBZSxHQUFFLENBQUMsQ0FBQztLQUMzQjtBQUNMLENBQUMsQ0FBQTtBQWZZLFFBQUEsY0FBYyxrQkFlMUI7QUFFTSxNQUFNLFlBQVksR0FBd0IsQ0FBQyxHQUFzQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNuRixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUk7UUFBRSxPQUFPLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQixDQUFDLENBQUE7QUFIWSxRQUFBLFlBQVksZ0JBR3hCO0FBRUQsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLE1BQWlCLElBQUEscUJBQWUsRUFBQyxHQUFHLENBQUMsRUFBRSxFQUFFO0lBQ3ZILE1BQU0sS0FBSyxHQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ2hELElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsTUFBTSxNQUFNLEdBQUcscUJBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsTUFBTTtRQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSwwQkFBVyxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsTUFBTSxXQUFXLEdBQUcscUJBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6RCxNQUFNLFlBQVksR0FBRyxxQkFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLE9BQU8sMkJBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFBLDhCQUFlLEVBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUN2RixDQUFDLENBQUEifQ==