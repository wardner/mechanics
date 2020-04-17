import { Router } from 'express';
import { getServices, createService, updateService, deleteService, getService }
from '../controllers/service.controler';
const router = Router();

router.route('/service/:id').get(getService).put(updateService).delete(deleteService);
router.get('/services', getServices);
router.post('/service', createService);

export default router;