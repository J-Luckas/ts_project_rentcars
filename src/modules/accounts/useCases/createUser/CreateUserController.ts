import 'reflect-metadata';
import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { container } from 'tsyringe';

// Create class CreateUserController function handle with Request and Response as parameters get the req.body using destructuring and call container
// injectable function resolve from tsyringe to resolve the CreateUserUseCase class
class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {                
        const { name, password, email, driver_license } = req.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        await createUserUseCase.execute({ name, password, email, driver_license });

        return res.sendStatus(201);
    }
}

export { CreateUserController };