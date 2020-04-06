import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Service } from './service.entity';
import { Car } from './car.entity';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerDNI: string;

    @ManyToOne(type => Car, car => car.plate)
    carPLATE: string;

    @OneToMany(type => Service, service => service.id)
    services: Service[];

    @Column()
    total: number;
}