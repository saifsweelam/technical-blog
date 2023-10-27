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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validators = __importStar(require("../validators/comments.validators"));
const ctrl = __importStar(require("../controllers/comments.controllers"));
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const router = (0, express_1.Router)();
router.get('/', validators.getComments, ctrl.getComments);
router.post('/', auth_middlewares_1.requiresAuth, validators.createComment, ctrl.createComment);
router.get('/:commentId', validators.getComment, ctrl.getComment);
router.patch('/:commentId', auth_middlewares_1.requiresAuth, validators.patchComment, ctrl.patchComment);
router.delete('/:commentId', auth_middlewares_1.requiresAuth, validators.deleteComment, ctrl.deleteComment);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudHMucm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL2NvbW1lbnRzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlDO0FBQ2pDLDhFQUFnRTtBQUNoRSwwRUFBNEQ7QUFDNUQsc0VBQStEO0FBRS9ELE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBR3hCLE1BQU0sQ0FBQyxHQUFHLENBQUksR0FBRyxFQUEwQixVQUFVLENBQUMsV0FBVyxFQUFJLElBQUksQ0FBQyxXQUFXLENBQUcsQ0FBQztBQUN6RixNQUFNLENBQUMsSUFBSSxDQUFHLEdBQUcsRUFBWSwrQkFBWSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxHQUFHLENBQUksYUFBYSxFQUFnQixVQUFVLENBQUMsVUFBVSxFQUFLLElBQUksQ0FBQyxVQUFVLENBQUksQ0FBQztBQUN6RixNQUFNLENBQUMsS0FBSyxDQUFFLGFBQWEsRUFBRSwrQkFBWSxFQUFFLFVBQVUsQ0FBQyxZQUFZLEVBQUcsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLCtCQUFZLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFekYsa0JBQWUsTUFBTSxDQUFDIn0=