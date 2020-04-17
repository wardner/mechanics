// import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
// import { Service } from './service.entity';
// import { Team } from './team.entity';

// @Entity()
// export class TeamService {
//     @PrimaryGeneratedColumn()
//     team_serviceID: number;

//     // @OneToOne(type => Service, service => service.serviceID)
//     // @JoinColumn()
//     @Column()
//     serviceID: number;

//     // @OneToOne(type => Team, team => team.teamID)
//     // @JoinColumn()
//     @Column()
//     teamID: number;
// }