import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { deleteFile } from '../../../../utils/file';

interface IRequest{
    userId: string;
    avatar: string;
}

@injectable()
export class UpdateUserAvatarUseCase {

    constructor( 
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute({ userId, avatar }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(userId);

        if(user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }

        user.avatar = avatar;

        await this.usersRepository.create(user);
    }
}