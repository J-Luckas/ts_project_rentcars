import { inject, injectable } from 'tsyringe';
import { hash } from 'bcrypt';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../errors/AppError';


// Create class CreateUserUseCase injectable function execute
@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError('User already exists', 400);
        }

        const hashedPassword = await hash(password, 8);

        await this.usersRepository.create({
            name, password: hashedPassword, email, driver_license
        });
    }
}

export { CreateUserUseCase };
