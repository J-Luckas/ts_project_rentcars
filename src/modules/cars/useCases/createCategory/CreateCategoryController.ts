import 'reflect-metadata';
import { Request, Response } from 'express';

import CreateCategoryUseCase from './CreateCategoryUseCase';
import { container } from 'tsyringe';

class CreateCategoryController {

    async handle( req :Request, res: Response ): Promise<Response>{
        const { name, description } = req.body;        
        const createdCategoryUseCase = container.resolve(CreateCategoryUseCase);
        await createdCategoryUseCase.execute( { name, description } );
        
        return res.sendStatus(201);
    }
}

export { CreateCategoryController };