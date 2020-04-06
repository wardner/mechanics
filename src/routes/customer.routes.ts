import {Router} from 'express';
import { getCustomers, createCustomer, updateCustomer, deleteCustomer, getCustomer } from '../controllers/customer.controller';
const router = Router();

router.get('/customers', getCustomers);
router.get('/customer/:dni', getCustomer);
router.post('/customer', createCustomer);
router.put('/customer/:dni', updateCustomer);
router.delete('/customer/:dni', deleteCustomer);

export default router;