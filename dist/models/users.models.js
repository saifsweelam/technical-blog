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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludePassword = exports.createUser = exports.getUserByEmail = exports.getUserById = void 0;
const config_1 = require("../config");
function getUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield config_1.prisma.user.findUnique({ where: { id: userId } });
    });
}
exports.getUserById = getUserById;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield config_1.prisma.user.findUnique({ where: { email } });
    });
}
exports.getUserByEmail = getUserByEmail;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield config_1.prisma.user.create({ data: user });
    });
}
exports.createUser = createUser;
function excludePassword(user) {
    const { password } = user, userWithoutPassword = __rest(user, ["password"]);
    return userWithoutPassword;
}
exports.excludePassword = excludePassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3VzZXJzLm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUFtQztBQUVuQyxTQUFzQixXQUFXLENBQUMsTUFBYzs7UUFDNUMsT0FBTyxNQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQUE7QUFGRCxrQ0FFQztBQUVELFNBQXNCLGNBQWMsQ0FBQyxLQUFhOztRQUM5QyxPQUFPLE1BQU0sZUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUFBO0FBRkQsd0NBRUM7QUFFRCxTQUFzQixVQUFVLENBQUMsSUFBbUM7O1FBQ2hFLE9BQU8sTUFBTSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FBQTtBQUZELGdDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLElBQVU7SUFDdEMsTUFBTSxFQUFFLFFBQVEsS0FBNkIsSUFBSSxFQUE1QixtQkFBbUIsVUFBSyxJQUFJLEVBQTNDLFlBQW9DLENBQU8sQ0FBQztJQUNsRCxPQUFPLG1CQUFtQixDQUFDO0FBQy9CLENBQUM7QUFIRCwwQ0FHQyJ9