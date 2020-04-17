import {Router} from 'express';
import { getCustomers, createCustomer, updateCustomer, deleteCustomer, getCustomer }
from '../controllers/customer.controller';
const router = Router();

router.route('/customer/:dni').get(getCustomer).put(updateCustomer)
.delete(deleteCustomer);
router.get('/customers', getCustomers);
router.post('/customer', createCustomer);

export default router;