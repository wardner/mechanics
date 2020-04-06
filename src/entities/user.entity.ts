import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Team} from './team.entity';

enum rol {
    ADMIN = 'admin',
    USER = 'user'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    lastname: string;

    @Column({nullable: false, unique: true})
    email: string;

    @Column({nullable: false})
    password: string;
    
    @Column({default: 'user'})
    rol: rol;

    @ManyToOne(type => Team, team => team.id)
    team: Team;
}