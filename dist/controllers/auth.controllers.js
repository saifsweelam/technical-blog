"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const hash_service_1 = __importDefault(require("../services/hash.service"));
const jwt_service_1 = __importDefault(require("../services/jwt.service"));
const responser_service_1 = __importDefault(require("../services/responser.service"));
const Users = __importStar(require("../models/users.models"));
const login = async (req, res, next) => {
    try {
        const user = await Users.getUserByEmail(req.body.email);
        if (!user)
            return next((0, http_errors_1.default)(404, "User not found"));
        if (!await hash_service_1.default.check(req.body.password, user))
            return next((0, http_errors_1.default)(401, "Incorrect Password"));
        const accessToken = jwt_service_1.default.generateAccessToken(user);
        const refreshToken = jwt_service_1.default.generateRefreshToken(user.id);
        res.cookie("refreshToken", refreshToken, { maxAge: 3.516e10, httpOnly: true });
        responser_service_1.default.success(res, { user: Users.excludePassword(user), accessToken });
    }
    catch (err) {
        next((0, http_errors_1.default)());
    }
};
exports.login = login;
const register = async (req, res, next) => {
    try {
        const existingUser = await Users.getUserByEmail(req.body.email);
        if (existingUser)
            return next((0, http_errors_1.default)(400, "User Already Exists"));
        const newUser = await Users.createUser({
            name: req.body.name,
            password: await hash_service_1.default.hash(req.body.password),
            email: req.body.email,
            avatar: req.body.avatar
        });
        responser_service_1.default.success(res, Users.excludePassword(newUser), 201);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
};
exports.register = register;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBMEM7QUFDMUMsNEVBQW1EO0FBQ25ELDBFQUFpRDtBQUNqRCxzRkFBNkQ7QUFDN0QsOERBQWdEO0FBR3pDLE1BQU0sS0FBSyxHQUFvQixLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUMzRCxJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxJQUFBLHFCQUFlLEVBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxzQkFBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxJQUFBLHFCQUFlLEVBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUMvRyxNQUFNLFdBQVcsR0FBRyxxQkFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELE1BQU0sWUFBWSxHQUFHLHFCQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0UsMkJBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDckY7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLElBQUksQ0FBQyxJQUFBLHFCQUFlLEdBQUUsQ0FBQyxDQUFDO0tBQzNCO0FBQ0wsQ0FBQyxDQUFBO0FBWlksUUFBQSxLQUFLLFNBWWpCO0FBRU0sTUFBTSxRQUFRLEdBQXVCLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2pFLElBQUk7UUFDQSxNQUFNLFlBQVksR0FBRyxNQUFNLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQyxJQUFBLHFCQUFlLEVBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUMzRSxNQUFNLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDbkMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNuQixRQUFRLEVBQUUsTUFBTSxzQkFBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuRCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsMkJBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3RFO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxJQUFBLHFCQUFlLEdBQUUsQ0FBQyxDQUFDO0tBQzNCO0FBQ0wsQ0FBQyxDQUFBO0FBZlksUUFBQSxRQUFRLFlBZXBCIn0=