import {Request, Response} from 'express';
import { Customer } from '../entities/customer.entity';
import { getRepository } from 'typeorm';

// export const getCustomers = async (req: Request, res: Response): Promise<Response> => {
//   //  const customers = await getRepository(Customer).find({isActive: true});
//     const customers = await getRepository(Customer).find();
//     if(customers.length > 0){
//         return res.json(customers);
//     }

//     return res.status(400).json({msg: 'Customers not found'});
// }

export const getCustomers = async (req: Request, res: Response): Promise<Response> => {
    const customers = await getRepository(Customer)
        .createQueryBuilder('customer')
        .getMany();

    if(customers.length > 0){
        return res.json(customers);
    }

    return res.status(400).json({msg: 'Customers Not Found'});
}

// export const getCustomer = async (req: Request, res: Response): Promise<Response> => {
//     const customer = await getRepository(Customer).findOne(req.params.dni);
//     if(!customer){
//         return res.status(400).json({msg: 'Customer not found'});
//     }
    
//     return res.json(customer);
// }

export const getCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer = await getRepository(Customer)
        .createQueryBuilder('customer')
        .leftJoinAndSelect('customer.car', 'car')
        .where('customer.dni = :dni', {dni: req.params.dni})
        .getOne();

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
    // const customer = await getRepository(Customer).findOne(req.params.dni);
    // if(customer){
    //     getRepository(Customer).merge(customer, {isActive: false});
    //     await getRepository(Customer).save(customer);
    //     return res.json({msg: 'Customer Eliminated'});
    // }
    // return res.status(400).json({msg: 'Customer Not Found'});
    const customer = await getRepository(Customer).delete(req.params);
    return res.json({msg: 'Customer Eliminated'});
}