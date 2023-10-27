import { Router } from 'express';
import * as validators from '../validators/topics.validators';
import * as ctrl from '../controllers/topics.controllers';
import { requiresAuth } from '../middlewares/auth.middlewares';

const router = Router();


router.get ('/',                                     validators.getTopics,       ctrl.getTopics      );
router.post('/',                       requiresAuth, validators.createTopic,     ctrl.createTopic    );
router.get ('/:topicId',                             validators.getTopic,        ctrl.getTopic       );
router.get ('/:topicId/posts',                       validators.getTopicPosts,   ctrl.getTopicPosts  );
router.post('/:topicId/posts',         requiresAuth, validators.createTopicPost, ctrl.createTopicPost);
router.get ('/:topicId/posts/:postId',               validators.getTopicPost,    ctrl.getTopicPost   );

export default router;