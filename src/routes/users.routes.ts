import { Router } from 'express';
import * as validators from '../validators/users.validators';
import * as ctrl from '../controllers/users.controllers';

const router = Router();


router.get('/',                      validators.getUsers,        ctrl.getUsers       );
router.get('/:userId',               validators.getUser,         ctrl.getUser        );
router.get('/:userId/posts',         validators.getUserPosts,    ctrl.getUserPosts   );
router.get('/:userId/posts/:postId', validators.getUserPost,     ctrl.getUserPost    );
router.get('/:userId/comments',      validators.getUserComments, ctrl.getUserComments);
router.get('/:userId/likes',         validators.getUserLikes,    ctrl.getUserLikes   );

export default router;