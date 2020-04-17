import { Router } from 'express';
import { logIn } from '../controllers/login.controller';
const router = Router();

router.post('/login', logIn);

export default router;