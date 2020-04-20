import {Router} from 'express';
import { getCars, createCar, updateCar, deleteCar, getCar, carServices } 
from '../controllers/car.controller';
const router = Router();

router.get('/cars', getCars);
router.post('/car', createCar);
router.route('/car/:plate').get(getCar).put(updateCar).delete(deleteCar);
router.get('/carservices/:dni', carServices);

export default router;