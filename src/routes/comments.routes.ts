import { Router } from 'express';
import * as validators from '../validators/comments.validators';
import * as ctrl from '../controllers/comments.controllers';
import { requiresAuth } from '../middlewares/auth.middlewares';

const router = Router();


router.get   ('/',                         validators.getComments,   ctrl.getComments  );
router.post  ('/',           requiresAuth, validators.createComment, ctrl.createComment);
router.get   ('/:commentId',               validators.getComment,    ctrl.getComment   );
router.patch ('/:commentId', requiresAuth, validators.patchComment,  ctrl.patchComment );
router.delete('/:commentId', requiresAuth, validators.deleteComment, ctrl.deleteComment);

export default router;