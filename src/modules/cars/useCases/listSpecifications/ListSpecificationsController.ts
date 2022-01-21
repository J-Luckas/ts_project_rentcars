import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { AppError } from '../../../../errors/AppError';


export class ListSpecificationsController{
    
    constructor( private listSpecificationsUseCase: ListSpecificationsUseCase ){}

    handle( req: Request, res: Response): Response {
        try{        
            return res.status(200).json( this.listSpecificationsUseCase.execute() );
        }catch(err){
            throw new AppError(err);
        }
    }
}