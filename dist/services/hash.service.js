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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
exports.default = {
    hash(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bcrypt_1.hash)(password, 10);
        });
    },
    check(password, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bcrypt_1.compare)(password, user.password);
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvaGFzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXVDO0FBSXZDLGtCQUFlO0lBQ0wsSUFBSSxDQUFDLFFBQWdCOztZQUN2QixPQUFPLE1BQU0sSUFBQSxhQUFJLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVLLEtBQUssQ0FBQyxRQUFnQixFQUFFLElBQVU7O1lBQ3BDLE9BQU8sTUFBTSxJQUFBLGdCQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDSixDQUFBIn0=