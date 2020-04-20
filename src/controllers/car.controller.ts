import { Request, Response } from 'express';
import { Car } from '../entities/car.entity';
import { getRepository } from 'typeorm';
import { Service } from '../entities/service.entity';

export const getCars = async (req: Request, res: Response): Promise<Response> => {
    const cars = await getRepository(Car).find();
    if (cars.length > 0) {
        return res.json(cars);
    }

    return res.status(404).json({ msg: 'Cars not found' });
}

export const getCar = async (req: Request, res: Response): Promise<Response> => {
    const car = await getRepository(Car).findOne(req.params.plate);
    if (!car) {
        return res.status(404).json({ msg: 'Car not found' });
    }
    return res.json(car);
}

export const createCar = async (req: Request, res: Response): Promise<Response> => {
    const car = new Car();
    car.plate = req.body.plate;
    car.brand = req.body.brand;
    car.model = req.body.model;
    car.year = req.body.year;
    car.color = req.body.color;
    car.customer = req.body.customer;
    const { serviceID } = req.body;
    const service = await getRepository(Service).findOne({ serviceID });
    if (service) car.services = [service]
    console.log(car.services);
    const newCar = getRepository(Car).create(car);
    const results = await getRepository(Car).save(newCar);
    return res.json(results);
}

export const updateCar = async (req: Request, res: Response): Promise<Response> => {
    const { plate } = req.params;
    const car = await getRepository(Car).findOne({ where: { plate }, relations: ['services'] });
    const { serviceID } = req.body;
    const service = await getRepository(Service).findOne({ serviceID });
    if (service) car.services = [...car.services, service];
    if (car) {
        getRepository(Car).merge(car, req.body);
        const results = await getRepository(Car).save(car);
        return res.json({ results, msg: 'Car Succefully Updated' });
    }
    return res.status(400).json({ msg: 'Car Not Found' });
}

export const deleteCar = async (req: Request, res: Response): Promise<Response> => {
    const car = await getRepository(Car).findOne(req.params.plate);
    if (!car) {
        return res.status(400).json({ msg: 'Car not found' });
    }
    const results = await getRepository(Car).delete(req.params.plate);
    return res.json({ results, msg: 'Car Deleted' });
}

export const carServices = async (req: Request, res: Response): Promise<Response> => {

    // const carServices = await getRepository(Car).find({
    //     relations: ['services'],
    //     select: ['plate', 'brand', 'model', 'year', 'color'],
    //     where: {customer: req.params.dni}
    // });
    // return res.json(carServices);

    const carServices = await getRepository(Car).find({
        relations: ['services'],
        select: ['plate', 'brand', 'model', 'year', 'color'],
        where: { plate: req.params.plate }
    });
    return res.json(carServices);

}
