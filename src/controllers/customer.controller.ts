import {Request, Response} from 'express';
import { Customer } from '../entities/customer.entity';
import { getRepository } from 'typeorm';
// import CustomerRepository from '../repositories/customer.repository';
// import { Car } from '../entities/car.entity';

// export default class CustomerController {

//     constructor(private customerRepository: CustomerRepository){}
    
//     async getCustomers(req: Request, res: Response): Promise<Response> {
//         const users: Customer[] = await this.customerRepository.getAll();
//         return res.json({users});
//     }
        
//     // async createCustomer(req: Request, res: Response): Promise<Response> {
//     //     const newCustomer: Customer = await this.customerRepository.create(req.body);
//     //     return 
//     // }

// }

export const getCustomers = async (req: Request, res: Response): Promise<Response> => {
    const customers = await getRepository(Customer).find({isActive: true});
    if(customers.length > 0){
        return res.json(customers);
    }

    return res.status(400).json({msg: 'Customers not found'});
}

export const getCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer = await getRepository(Customer).findOne(req.params.dni);
    if(!customer){
        return res.status(400).json({msg: 'Customer not found'});
    }
    
    return res.json(customer);
}

export const createCustomer = async (req: Request, res: Response): Promise<Response> => {
    const newCustomer = getRepository(Customer).create(req.body);
    const results = await getRepository(Customer).save(newCustomer);
    return res.json(results);
}

export const updateCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer = await getRepository(Customer).findOne(req.params.dni);
    if(customer){
        getRepository(Customer).merge(customer, req.body);
        const results = await getRepository(Customer).save(customer);
        return res.json(results);
    }
    return res.status(400).json({msg: 'Customer Not Found'});
}

export const deleteCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer = await getRepository(Customer).findOne(req.params.dni);
    if(customer){
        getRepository(Customer).merge(customer, {isActive: false});
        await getRepository(Customer).save(customer);
        return res.json({msg: 'Customer Eliminated'});
    }
    return res.status(400).json({msg: 'Customer Not Found'});
}