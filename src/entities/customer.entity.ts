import {Entity, Column, OneToMany, Generated} from 'typeorm';
import {Car} from './car.entity';

@Entity()
export class Customer {
    @Column()
    @Generated()    
    id: number;

    @Column({primary: true, nullable: false, unique: true})
    dni: string;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    cellphone: number;

    @Column({nullable: true, unique: true})
    email: string;

    @OneToMany(type => Car, car => car.customer, {
        eager: true
    })
    car: Car[];

    @Column({default: 'true'})
    isActive: boolean;
}