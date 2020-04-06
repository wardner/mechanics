import {Router} from 'express';
import { getUsers, createUser, updateUser, deleteUser, getUser } from '../controllers/user.controller';
const router = Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;