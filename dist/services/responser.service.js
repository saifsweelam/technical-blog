"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    success(res, body, statusCode = 200, pagination) {
        const response = {
            success: true,
            statusCode,
            ...pagination
        };
        body && (response.body = body);
        return res.status(statusCode).json(response);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9yZXNwb25zZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLGtCQUFlO0lBQ1gsT0FBTyxDQUFXLEdBQWEsRUFBRSxJQUFlLEVBQUUsYUFBcUIsR0FBRyxFQUFFLFVBQThCO1FBQ3RHLE1BQU0sUUFBUSxHQUEwQjtZQUNwQyxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVU7WUFDVixHQUFHLFVBQVU7U0FDaEIsQ0FBQTtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0osQ0FBQSJ9