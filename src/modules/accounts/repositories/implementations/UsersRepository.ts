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

    findByEmail(email: string): Promise<User | undefined> {
        return this.repository.findOne({ where: { email } });
    }

    async create({name, email, driver_license, password}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ name, email, driver_license, password });
        await this.repository.save(user);
    }
}

export { UsersRepository };