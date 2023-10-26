"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
exports.default = {
    generateAccessToken(user) {
        return (0, jsonwebtoken_1.sign)(user, config_1.secret);
    },
    decryptAccessToken(token) {
        try {
            return (0, jsonwebtoken_1.verify)(token, config_1.secret);
        }
        catch {
            return;
        }
    },
    generateRefreshToken(userId) {
        return (0, jsonwebtoken_1.sign)({ userId }, config_1.altSecret, { expiresIn: "1y" });
    },
    decryptRefreshToken(token) {
        try {
            const data = (0, jsonwebtoken_1.verify)(token, config_1.altSecret);
            return data.userId;
        }
        catch {
            return;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2aWNlcy9qd3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE0QztBQUU1QyxzQ0FBOEM7QUFFOUMsa0JBQWU7SUFDWCxtQkFBbUIsQ0FBRSxJQUFVO1FBQzNCLE9BQU8sSUFBQSxtQkFBSSxFQUFDLElBQUksRUFBRSxlQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0JBQWtCLENBQUUsS0FBYTtRQUM3QixJQUFJO1lBQ0EsT0FBTyxJQUFBLHFCQUFNLEVBQUMsS0FBSyxFQUFFLGVBQU0sQ0FBUyxDQUFDO1NBQ3hDO1FBQUMsTUFBTTtZQUNKLE9BQU87U0FDVjtJQUNMLENBQUM7SUFFRCxvQkFBb0IsQ0FBRSxNQUFjO1FBQ2hDLE9BQU8sSUFBQSxtQkFBSSxFQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsa0JBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxtQkFBbUIsQ0FBRSxLQUFhO1FBQzlCLElBQUk7WUFDQSxNQUFNLElBQUksR0FBRyxJQUFBLHFCQUFNLEVBQUMsS0FBSyxFQUFFLGtCQUFTLENBQXVCLENBQUE7WUFDM0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCO1FBQUMsTUFBTTtZQUNKLE9BQU87U0FDVjtJQUNMLENBQUM7Q0FDSixDQUFBIn0=