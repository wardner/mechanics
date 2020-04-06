import { Router } from 'express';
import { getServices, createService, updateService, deleteService, getService } from '../controllers/service.controler';
const router = Router();

router.get('/services', getServices);
router.get('/service/:id', getService);
router.post('/service', createService);
router.put('/service/:id', updateService);
router.delete('/service/:id', deleteService);

export default router;