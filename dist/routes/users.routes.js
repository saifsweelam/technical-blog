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
const validators = __importStar(require("../validators/users.validators"));
const ctrl = __importStar(require("../controllers/users.controllers"));
const router = (0, express_1.Router)();
router.get('/', validators.getUsers, ctrl.getUsers);
router.get('/:userId', validators.getUser, ctrl.getUser);
router.get('/:userId/posts', validators.getUserPosts, ctrl.getUserPosts);
router.get('/:userId/posts/:postId', validators.getUserPost, ctrl.getUserPost);
router.get('/:userId/comments', validators.getUserComments, ctrl.getUserComments);
router.get('/:userId/likes', validators.getUserLikes, ctrl.getUserLikes);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL3VzZXJzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlDO0FBQ2pDLDJFQUE2RDtBQUM3RCx1RUFBeUQ7QUFFekQsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFHeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQXVCLFVBQVUsQ0FBQyxRQUFRLEVBQVMsSUFBSSxDQUFDLFFBQVEsQ0FBUSxDQUFDO0FBQ3ZGLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFnQixVQUFVLENBQUMsT0FBTyxFQUFVLElBQUksQ0FBQyxPQUFPLENBQVMsQ0FBQztBQUN2RixNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFVLFVBQVUsQ0FBQyxZQUFZLEVBQUssSUFBSSxDQUFDLFlBQVksQ0FBSSxDQUFDO0FBQ3ZGLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBTSxJQUFJLENBQUMsV0FBVyxDQUFLLENBQUM7QUFDdkYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBTyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN2RixNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFVLFVBQVUsQ0FBQyxZQUFZLEVBQUssSUFBSSxDQUFDLFlBQVksQ0FBSSxDQUFDO0FBRXZGLGtCQUFlLE1BQU0sQ0FBQyJ9