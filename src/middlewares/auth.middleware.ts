import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Verificar el Token
export const tokenValidator = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({msg: 'Access Denied'});
    jwt.verify(token, 'SEED-DESARROLLO', (err, payload: any) => {
        if(err){
            return res.status(401).json({
                ok: false,
                err,
                msg: 'Access Denied'
            });
        }

        req.user = payload.user;
        
        next();
    });
    // next();
    // let payload = jwt.verify(token, 'SEED-DESARROLLO');
}