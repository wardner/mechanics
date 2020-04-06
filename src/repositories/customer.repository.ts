import { Customer } from '../entities/customer.entity';
import { getRepository, Repository } from 'typeorm';

export default class CustomerRepository{

    private repository: Repository<Customer>;

    constructor() {
        this.repository = getRepository(Customer);
    }

    async create(customer: Customer): Promise<Customer> {
        const results = await this.repository.save(customer);
        if(results){
            return customer;
        }
        return;
    }

    async getAll(): Promise<Customer[]> {
        return await this.repository.find();
    }
}