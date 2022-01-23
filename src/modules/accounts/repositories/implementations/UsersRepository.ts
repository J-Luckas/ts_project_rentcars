import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";


class UsersRepository implements IUsersRepository{

    // Language: typescript
    private repository: Repository<User>;

    constructor(){
        this.repository = getRepository(User);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return await this.repository.findOne({ where: { email } });
    }

    async findById(id: string): Promise<User | undefined> {
        return await this.repository.findOne({ where: { id } });
    }

    async create({name, email, driver_license, password, avatar, id}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ name, email, driver_license, password, avatar, id });
        await this.repository.save(user);
    }
}

export { UsersRepository };