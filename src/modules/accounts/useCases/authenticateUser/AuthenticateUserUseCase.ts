import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../errors/AppError';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {        
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
export class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository") private usersRepository: IUsersRepository
    ){}

    async execute( {email, password}: IRequest ): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if( !user ) {
            throw new AppError("Email or password invalid!", 401);
        }

        const passwordMatched = await compare(password, user.password);

        if( !passwordMatched ) {
            throw new AppError("Email or password invalid!", 401);
        }

        const token = sign({}, "luckas", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token: token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;
    }   
}