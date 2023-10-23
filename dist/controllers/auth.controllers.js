"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
const users_models_1 = require("../models/users.models");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_models_1.getUserByEmail)(req.body.email);
        if (!user)
            return next((0, http_errors_1.default)(404, "User not found"));
        if (!(yield hash_service_1.default.check(req.body.password, user)))
            return next((0, http_errors_1.default)(401, "Incorrect Password"));
        const token = jwt_service_1.default.generate(user);
        responser_service_1.default.success(res, { user: (0, users_models_1.excludePassword)(user), token });
    }
    catch (err) {
        next((0, http_errors_1.default)());
    }
});
exports.login = login;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield (0, users_models_1.getUserByEmail)(req.body.email);
        if (existingUser)
            return next((0, http_errors_1.default)(400, "User Already Exists"));
        const newUser = yield (0, users_models_1.createUser)({
            name: req.body.name,
            password: yield hash_service_1.default.hash(req.body.password),
            email: req.body.email,
            avatar: req.body.avatar
        });
        responser_service_1.default.success(res, (0, users_models_1.excludePassword)(newUser), 201);
    }
    catch (err) {
        console.error(err);
        next((0, http_errors_1.default)());
    }
});
exports.register = register;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXNDO0FBQ3RDLDRFQUE0QztBQUM1QywwRUFBMEM7QUFDMUMsc0ZBQXNEO0FBQ3RELHlEQUFxRjtBQUc5RSxNQUFNLEtBQUssR0FBb0IsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQzNELElBQUk7UUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEsNkJBQWMsRUFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsSUFBQSxxQkFBVyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUEsTUFBTSxzQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUFFLE9BQU8sSUFBSSxDQUFDLElBQUEscUJBQVcsRUFBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLE1BQU0sS0FBSyxHQUFHLHFCQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLDJCQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFBLDhCQUFlLEVBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUNsRTtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsSUFBSSxDQUFDLElBQUEscUJBQVcsR0FBRSxDQUFDLENBQUM7S0FDdkI7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQVZZLFFBQUEsS0FBSyxTQVVqQjtBQUVNLE1BQU0sUUFBUSxHQUF1QixDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDakUsSUFBSTtRQUNBLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBQSw2QkFBYyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsSUFBSSxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUMsSUFBQSxxQkFBVyxFQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDdkUsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLHlCQUFVLEVBQUM7WUFDN0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNuQixRQUFRLEVBQUUsTUFBTSxzQkFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM1QyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsMkJBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUEsOEJBQWUsRUFBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6RDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsSUFBQSxxQkFBVyxHQUFFLENBQUMsQ0FBQztLQUN2QjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBZlksUUFBQSxRQUFRLFlBZXBCIn0=