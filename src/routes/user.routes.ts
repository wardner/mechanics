import {Router} from 'express';
import { getUsers, createUser, updateUser, deleteUser, getUser }
from '../controllers/user.controller';
const router = Router();

router.route('/user/:id').get(getUser).put(updateUser)
.delete(deleteUser);
router.get('/users', getUsers);
router.post('/user', createUser);

export default router;