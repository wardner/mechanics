import { getRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const logIn = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne({email: req.body.email});
    
    if(!user || !user.comparePassword(req.body.password)){
        return res.status(400).json({ok: false, msg: 'Email or Password are Incorrect'});
    }

    let token = jwt.sign({user}, 'SEED-DESARROLLO', {expiresIn: 60*60 *24*30});

    return res.json({msg: 'User Logged In', user, token});
}