import { Request, Response } from 'express';
import CreateCategoryUseCase from './CreateCategoryUseCase';

class CreateCategoryController {

    constructor( private createdCategoryUseCase: CreateCategoryUseCase ){}

    handle( req :Request, res: Response ): Response{
        const { name, description } = req.body;        

        this.createdCategoryUseCase.execute( { name, description } );
        
        return res.sendStatus(201);
    }
}

export { CreateCategoryController };