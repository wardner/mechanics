import {Entity, Column, OneToMany, Generated} from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Customer {
    @Column()
    @Generated()    
    customerID: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column({primary: true, nullable: false, unique: true})
    dni: string;

    @Column()
    cel: string;

    @Column({nullable: true, unique: true})
    email: string;

    @OneToMany(type => Car, car => car.customer)
    car: Car[];

    // @Column({default: 'true'})
    // isActive: boolean;
}