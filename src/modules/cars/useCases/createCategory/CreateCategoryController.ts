import { Request, Response } from 'express';
import CreateCategoryUseCase from './CreateCategoryUseCase';

class CreateCategoryController {

    constructor( private createdCategoryUseCase: CreateCategoryUseCase ){}

    async handle( req :Request, res: Response ): Promise<Response>{
        const { name, description } = req.body;        

        await this.createdCategoryUseCase.execute( { name, description } );
        
        return res.sendStatus(201);
    }
}

export { CreateCategoryController };