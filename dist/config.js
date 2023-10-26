"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.altSecret = exports.secret = exports.prisma = exports.port = void 0;
const client_1 = require("@prisma/client");
const crypto_1 = require("crypto");
exports.port = process.env.PORT || 3000;
exports.prisma = new client_1.PrismaClient();
exports.secret = process.env.NODE_ENV === 'production' ? (0, crypto_1.randomBytes)(20).toString("hex") : "ThisIsTotallySecret";
exports.altSecret = process.env.NODE_ENV === 'production' ? (0, crypto_1.randomBytes)(20).toString("hex") : "OMGAnotherOne";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE4QztBQUM5QyxtQ0FBcUM7QUFFeEIsUUFBQSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ2hDLFFBQUEsTUFBTSxHQUFHLElBQUkscUJBQVksRUFBRSxDQUFDO0FBQzVCLFFBQUEsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBQSxvQkFBVyxFQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUM7QUFDekcsUUFBQSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFBLG9CQUFXLEVBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMifQ==