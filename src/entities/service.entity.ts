import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Payment} from './payment.entity';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @Column()
    price: number;

    @ManyToOne(type => Payment, payment => payment.services)
    payment: Payment;
}