import {Entity, Column, ManyToMany, Generated, JoinTable, ManyToOne, JoinColumn} from 'typeorm';
import {Customer} from './customer.entity';
import { Service } from './service.entity';

@Entity()
export class Car {
    @Column()
    @Generated()
    carID: number;

    @Column({primary: true, unique: true})
    plate: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: string;

    @Column()
    color: string;

    @ManyToOne(type => Customer, customer => customer.car, {nullable: false})
    customer: Customer;

    @ManyToMany(type => Service, {cascade: true})
    @JoinTable({name: 'car_services'})
    services: Service[];
}