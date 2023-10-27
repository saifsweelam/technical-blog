import { Router } from 'express';
import * as validators from '../validators/auth.validators';
import * as ctrl from '../controllers/auth.controllers';

const router = Router();

router.post('/login',    validators.login,    ctrl.login);
router.post('/register', validators.register, ctrl.register);

export default router;