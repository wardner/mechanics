import {Router} from 'express';
import { getCars, createCar, updateCar, deleteCar, getCar } from '../controllers/car.controller';
const router = Router();

router.get('/cars', getCars);
router.get('/car/:plate', getCar);
router.post('/car', createCar);
router.put('/car/:plate', updateCar);
router.delete('/car/:plate', deleteCar);

export default router;