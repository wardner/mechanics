import {Entity, Column, OneToMany, Generated, ManyToOne} from 'typeorm';
import {Customer} from './customer.entity';
import { Payment } from './payment.entity';

@Entity()
export class Car {
    @Column()
    @Generated()
    id: number;

    @Column({primary: true, unique: true})
    plate: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    color: string;

    @ManyToOne(type => Customer, customer => customer.car)
    customer: Customer;

    @OneToMany(type => Payment, payment => payment.id)
    payment: Payment[];

    // @OneToMany(type => Service, service => service.id)
    // service: Service[];
}