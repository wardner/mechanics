import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BeforeInsert } from 'typeorm';
import bcrypt from "bcryptjs";
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
    role: rol;

    @ManyToOne(type => Team, team => team.teamID)
    team: Team[];

    @BeforeInsert()
    async encryptPassword() {
        const hash = bcrypt.hashSync(this.password, 10);
        this.password = hash;
        return this.password;
    }

    comparePassword = (pass: string): boolean =>
        bcrypt.compareSync(pass, this.password);
}
