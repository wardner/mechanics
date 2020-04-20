import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import {User} from './user.entity';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    teamID: number;

    @Column()
    name: string;
    
    @OneToOne(type => User, user => user.id)
    @JoinColumn()
    leader: User;
}