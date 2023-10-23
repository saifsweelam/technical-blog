"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
exports.default = {
    generate(user) {
        return (0, jsonwebtoken_1.sign)(user, config_1.secret);
    },
    decrypt(token) {
        try {
            return (0, jsonwebtoken_1.verify)(token, config_1.secret);
        }
        catch (err) {
            return false;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2aWNlcy9qd3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE0QztBQUU1QyxzQ0FBbUM7QUFFbkMsa0JBQWU7SUFDWCxRQUFRLENBQUUsSUFBVTtRQUNoQixPQUFPLElBQUEsbUJBQUksRUFBQyxJQUFJLEVBQUUsZUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE9BQU8sQ0FBRSxLQUFhO1FBQ2xCLElBQUk7WUFDQSxPQUFPLElBQUEscUJBQU0sRUFBQyxLQUFLLEVBQUUsZUFBTSxDQUFTLENBQUM7U0FDeEM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztDQUNKLENBQUEifQ==