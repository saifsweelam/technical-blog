"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    success(res, body, statusCode = 200, pagination) {
        const response = Object.assign({ success: true, statusCode }, pagination);
        body && (response.body = body);
        return res.status(statusCode).json(response);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2aWNlcy9yZXNwb25zZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGtCQUFlO0lBQ1gsT0FBTyxDQUFXLEdBQWEsRUFBRSxJQUFlLEVBQUUsYUFBcUIsR0FBRyxFQUFFLFVBQTRDO1FBQ3BILE1BQU0sUUFBUSxtQkFDVixPQUFPLEVBQUUsSUFBSSxFQUNiLFVBQVUsSUFDUCxVQUFVLENBQ2hCLENBQUE7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQy9CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNKLENBQUEifQ==