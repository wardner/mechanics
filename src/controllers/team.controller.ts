import {Request, Response} from 'express';
import { Team } from '../entities/team.entity';
import { getRepository } from 'typeorm';


export const getTeams = async (req: Request, res: Response): Promise<Response> => {
    const teams = await getRepository(Team).find();
    if(!teams){
        return res.status(404).json({msg: 'Teams Not Found'});
    }
    return res.json(teams);
}

export const getTeam = async (req: Request, res: Response): Promise<Response> => {
    const team = await getRepository(Team).findOne(req.params.id);
    if(!team){
        return res.status(404).json({msg: 'Team Not Found'});
    }
    return res.json(team);
}


export const createTeam = async (req: Request, res: Response): Promise<Response> => {
    const newTeam = getRepository(Team).create(req.body);
    const results = await getRepository(Team).save(newTeam);
    return res.json(results);
}

export const updateTeam = async (req: Request, res: Response): Promise<Response> => {
    const team = await getRepository(Team).findOne(req.params.id);
    if(team){
        getRepository(Team).merge(team, req.body);
        const results = await getRepository(Team).save(team);
        return res.json({results, msg: 'Team Succefully Updated'});
    }
    return res.status(400).json({msg: 'Team Not Found'});
}

// No Funciona eliminar un equipo ARREGLAR
export const deleteTeam = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Team).delete(req.params.id);
    return res.json({results, msg: 'Team Deleted'});
}