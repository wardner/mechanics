import {Request, Response} from 'express';
import { Car } from '../entities/car.entity';
import { getRepository } from 'typeorm';

export const getCars = async (req: Request, res: Response): Promise<Response> => {
    const cars = await getRepository(Car).find();
    if(cars.length > 0){
        return res.json(cars);
    }

    return res.status(404).json({msg: 'Cars not found'});
}

export const getCar = async (req: Request, res: Response): Promise<Response> => {
    const car = await getRepository(Car).findOne(req.params.plate);
    if(!car){
        return res.status(404).json({msg: 'Car not found'});
    }
    return res.json(car);
}

export const createCar = async (req: Request, res: Response): Promise<Response> => {
    const newCar = getRepository(Car).create(req.body);
    const results = await getRepository(Car).save(newCar);
    return res.json(results);
}

export const updateCar = async (req: Request, res: Response): Promise<Response> => {
    const car = await getRepository(Car).findOne(req.params.plate);
    if(car){
        getRepository(Car).merge(car, req.body);
        const results = await getRepository(Car).save(car);
        return res.json({results, msg: 'Car Succefully Updated'});
    }
    return res.status(400).json({msg: 'Car Not Found'});
}

export const deleteCar = async (req: Request, res: Response): Promise<Response> => {
    const car = await getRepository(Car).findOne(req.params.plate);
    if(!car){
        return res.status(400).json({msg: 'Car not found'});
    }
    const results = await getRepository(Car).delete(req.params.plate);
    return res.json({results, msg: 'Car Deleted'});
}