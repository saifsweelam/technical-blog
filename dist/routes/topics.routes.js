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
const validators = __importStar(require("../validators/topics.validators"));
const ctrl = __importStar(require("../controllers/topics.controllers"));
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const router = (0, express_1.Router)();
router.get('/', validators.getTopics, ctrl.getTopics);
router.post('/', auth_middlewares_1.requiresAuth, validators.createTopic, ctrl.createTopic);
router.get('/:topicId', validators.getTopic, ctrl.getTopic);
router.get('/:topicId/posts', validators.getTopicPosts, ctrl.getTopicPosts);
router.post('/:topicId/posts', auth_middlewares_1.requiresAuth, validators.createTopicPost, ctrl.createTopicPost);
router.get('/:topicId/posts/:postId', validators.getTopicPost, ctrl.getTopicPost);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWNzLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy90b3BpY3Mucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBaUM7QUFDakMsNEVBQThEO0FBQzlELHdFQUEwRDtBQUMxRCxzRUFBK0Q7QUFFL0QsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFHeEIsTUFBTSxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQXNDLFVBQVUsQ0FBQyxTQUFTLEVBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBTyxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUF3QiwrQkFBWSxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBSyxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxHQUFHLENBQUUsV0FBVyxFQUE4QixVQUFVLENBQUMsUUFBUSxFQUFTLElBQUksQ0FBQyxRQUFRLENBQVEsQ0FBQztBQUN2RyxNQUFNLENBQUMsR0FBRyxDQUFFLGlCQUFpQixFQUF3QixVQUFVLENBQUMsYUFBYSxFQUFJLElBQUksQ0FBQyxhQUFhLENBQUcsQ0FBQztBQUN2RyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFVLCtCQUFZLEVBQUUsVUFBVSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdkcsTUFBTSxDQUFDLEdBQUcsQ0FBRSx5QkFBeUIsRUFBZ0IsVUFBVSxDQUFDLFlBQVksRUFBSyxJQUFJLENBQUMsWUFBWSxDQUFJLENBQUM7QUFFdkcsa0JBQWUsTUFBTSxDQUFDIn0=