import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
 
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    handle(req: Request, res: Response): Response {
        return res.json( this.listCategoriesUseCase.execute() );
    }
}