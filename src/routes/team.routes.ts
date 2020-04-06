import {Router} from 'express';
import { getTeams, createTeam, updateTeam, deleteTeam, getTeam } from '../controllers/team.controller';
const router = Router();

router.get('/teams', getTeams);
router.get('/team/:id', getTeam);
router.post('/team', createTeam);
router.put('/team/:id', updateTeam);
router.delete('/team/:id', deleteTeam);

export default router;