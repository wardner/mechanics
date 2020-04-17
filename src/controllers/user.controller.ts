import {Request, Response} from 'express';
import { User } from '../entities/user.entity';
import { getRepository } from 'typeorm';


export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    if(!users){
        return res.status(404).json({msg: 'Users Not Found'});
    }
    return res.json(users);
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if(!user){
        return res.status(404).json({msg: 'User Not Found'});
    }
    return res.json(user);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if(user){
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.json({results, msg: 'User Succefully Updated'});
    }
    return res.status(400).json({msg: 'User Not Found'});
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);
    return res.json({results, msg: 'User Deleted'});
}
