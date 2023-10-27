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
const validators = __importStar(require("../validators/posts.validators"));
const ctrl = __importStar(require("../controllers/posts.controllers"));
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const router = (0, express_1.Router)();
router.get('/', validators.getPosts, ctrl.getPosts);
router.post('/', auth_middlewares_1.requiresAuth, validators.createPost, ctrl.createPost);
router.get('/:postId', validators.getPost, ctrl.getPost);
router.patch('/:postId', auth_middlewares_1.requiresAuth, validators.patchPost, ctrl.patchPost);
router.delete('/:postId', auth_middlewares_1.requiresAuth, validators.deletePost, ctrl.deletePost);
router.get('/:postId/comments', validators.getPostComments, ctrl.getPostComments);
router.post('/:postId/comments', auth_middlewares_1.requiresAuth, validators.createPostComment, ctrl.createPostComment);
router.get('/:postId/likes', validators.getPostLikes, ctrl.getPostLikes);
router.post('/:postId/likes', auth_middlewares_1.requiresAuth, validators.createPostLike, ctrl.createPostLike);
router.delete('/:postId/likes', auth_middlewares_1.requiresAuth, validators.deletePostLike, ctrl.deletePostLike);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMucm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL3Bvc3RzLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWlDO0FBQ2pDLDJFQUE2RDtBQUM3RCx1RUFBeUQ7QUFDekQsc0VBQStEO0FBRS9ELE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBR3hCLE1BQU0sQ0FBQyxHQUFHLENBQUksR0FBRyxFQUFnQyxVQUFVLENBQUMsUUFBUSxFQUFXLElBQUksQ0FBQyxRQUFRLENBQVUsQ0FBQztBQUN2RyxNQUFNLENBQUMsSUFBSSxDQUFHLEdBQUcsRUFBa0IsK0JBQVksRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFTLElBQUksQ0FBQyxVQUFVLENBQVEsQ0FBQztBQUN2RyxNQUFNLENBQUMsR0FBRyxDQUFJLFVBQVUsRUFBeUIsVUFBVSxDQUFDLE9BQU8sRUFBWSxJQUFJLENBQUMsT0FBTyxDQUFXLENBQUM7QUFDdkcsTUFBTSxDQUFDLEtBQUssQ0FBRSxVQUFVLEVBQVcsK0JBQVksRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFVLElBQUksQ0FBQyxTQUFTLENBQVMsQ0FBQztBQUN2RyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBVywrQkFBWSxFQUFFLFVBQVUsQ0FBQyxVQUFVLEVBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBUSxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxHQUFHLENBQUksbUJBQW1CLEVBQWdCLFVBQVUsQ0FBQyxlQUFlLEVBQUksSUFBSSxDQUFDLGVBQWUsQ0FBRyxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxJQUFJLENBQUcsbUJBQW1CLEVBQUUsK0JBQVksRUFBRSxVQUFVLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDdkcsTUFBTSxDQUFDLEdBQUcsQ0FBSSxnQkFBZ0IsRUFBbUIsVUFBVSxDQUFDLFlBQVksRUFBTyxJQUFJLENBQUMsWUFBWSxDQUFNLENBQUM7QUFDdkcsTUFBTSxDQUFDLElBQUksQ0FBRyxnQkFBZ0IsRUFBSywrQkFBWSxFQUFFLFVBQVUsQ0FBQyxjQUFjLEVBQUssSUFBSSxDQUFDLGNBQWMsQ0FBSSxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUssK0JBQVksRUFBRSxVQUFVLENBQUMsY0FBYyxFQUFLLElBQUksQ0FBQyxjQUFjLENBQUksQ0FBQztBQUV2RyxrQkFBZSxNQUFNLENBQUMifQ==