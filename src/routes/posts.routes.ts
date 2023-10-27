import { Router } from 'express';
import * as validators from '../validators/posts.validators';
import * as ctrl from '../controllers/posts.controllers';
import { requiresAuth } from '../middlewares/auth.middlewares';

const router = Router();


router.get   ('/',                               validators.getPosts,          ctrl.getPosts         );
router.post  ('/',                 requiresAuth, validators.createPost,        ctrl.createPost       );
router.get   ('/:postId',                        validators.getPost,           ctrl.getPost          );
router.patch ('/:postId',          requiresAuth, validators.patchPost,         ctrl.patchPost        );
router.delete('/:postId',          requiresAuth, validators.deletePost,        ctrl.deletePost       );
router.get   ('/:postId/comments',               validators.getPostComments,   ctrl.getPostComments  );
router.post  ('/:postId/comments', requiresAuth, validators.createPostComment, ctrl.createPostComment);
router.get   ('/:postId/likes',                  validators.getPostLikes,      ctrl.getPostLikes     );
router.post  ('/:postId/likes',    requiresAuth, validators.createPostLike,    ctrl.createPostLike   );
router.delete('/:postId/likes',    requiresAuth, validators.deletePostLike,    ctrl.deletePostLike   );

export default router;