"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
exports.default = {
    async hash(password) {
        return await (0, bcrypt_1.hash)(password, 10);
    },
    async check(password, user) {
        return await (0, bcrypt_1.compare)(password, user.password);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvaGFzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXVDO0FBSXZDLGtCQUFlO0lBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFnQjtRQUN2QixPQUFPLE1BQU0sSUFBQSxhQUFJLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQWdCLEVBQUUsSUFBVTtRQUNwQyxPQUFPLE1BQU0sSUFBQSxnQkFBTyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNKLENBQUEifQ==