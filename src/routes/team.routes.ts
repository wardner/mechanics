import {Router} from 'express';
import { getTeams, createTeam, updateTeam, deleteTeam, getTeam }
from '../controllers/team.controller';
const router = Router();

router.route('/team/:id').get(getTeam).put(updateTeam).delete(deleteTeam);
router.get('/teams', getTeams);
router.post('/team', createTeam);

export default router;