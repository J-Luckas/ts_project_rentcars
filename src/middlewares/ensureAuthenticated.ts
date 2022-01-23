import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { AppError } from '../errors/AppError';


interface IPayLoad{
    sub: string;
}

export async function ensureAuthenticated( req: Request, res: Response, next: NextFunction ){

    const authHeader = req.headers.authorization;

    if( !authHeader ){
        throw new AppError('No token provided', 400);
    }

    const [ ,token ] = authHeader.split(' ');

    try{
        const { sub: user_id } = verify( token, 'luckas' ) as IPayLoad;     

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if( !user ){
            throw new AppError('User not found', 401);
        }
          
        req.user = {id: user_id};
        next();
    }catch( err ){
        throw new AppError(`Invalid token: ${err.message}`, 401);
    }
}