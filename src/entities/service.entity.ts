import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Team } from './team.entity';
import { Car } from './car.entity';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    serviceID: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @ManyToMany(type => Team)
    @JoinTable({name: 'team_services'})
    teams: Team[];
}