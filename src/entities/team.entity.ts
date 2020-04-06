import {Entity, OneToMany, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import {User} from './user.entity';
import { Service } from './service.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User, user => user.id, {eager: true})
    @JoinColumn()
    teamleader: User;

    @OneToOne(type => Service, {eager: true})
    @JoinColumn()
    service: Service;

    @OneToMany(type => User, user => user.id)
    users: User[];
}