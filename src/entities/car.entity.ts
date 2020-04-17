import {Entity, Column, ManyToMany, Generated, JoinTable, ManyToOne} from 'typeorm';
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

    @ManyToOne(type => Customer, customer => customer.car)
    customer: Customer;

    @ManyToMany(type => Service, service => service.cars)
    @JoinTable({name: 'car_services'})
    services: Service[];

    // @ManyToOne(type => Customer, customer => customer.dni)
    // customerDNI: Customer;

    // @OneToMany(type => Service, service => service.id)
    // service: Service[];
}