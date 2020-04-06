import {Request, Response} from 'express';
import { Service } from '../entities/service.entity';
import { getRepository } from 'typeorm';

export const getServices = async (req: Request, res: Response): Promise<Response> => {
    const services = await getRepository(Service).find();
    if(!services){
        return res.status(404).json({msg: 'Services Not Found'});
    }
    return res.json(services);
}

export const getService = async (req: Request, res: Response): Promise<Response> => {
    const service = await getRepository(Service).findOne(req.params.id);
    if(!service){
        return res.status(404).json({msg: 'Service Not Found'});
    }
    return res.json(service);
}

export const createService = async (req: Request, res: Response): Promise<Response> => {
    const newService = getRepository(Service).create(req.body);
    const results = await getRepository(Service).save(newService);
    return res.json(results);
}

export const updateService = async (req: Request, res: Response): Promise<Response> => {
    const service = await getRepository(Service).findOne(req.params.id);
    if(service){
        getRepository(Service).merge(service, req.body);
        const results = await getRepository(Service).save(service);
        return res.json({results, msg: 'Service Succefully Updated'});
    }
    return res.status(400).json({msg: 'Service Not Found'});
}

export const deleteService = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Service).delete(req.params.id);
    return res.json({results, msg: 'Service Deleted'});
}