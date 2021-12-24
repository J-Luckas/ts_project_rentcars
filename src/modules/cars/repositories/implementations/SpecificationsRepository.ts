import { getRepository, Repository } from "typeorm";
import Specification from "../../entities/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "../ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository{

    private repository: Repository<Specification>; 

    constructor(){
        this.repository = getRepository(Specification);
    }    

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({ name, description });

        await this.repository.save(specification);
    }

    // delete(id: string): void {
    //     const specificationIndex = this.specifications.findIndex(specification => specification.id === id);
    //     this.specifications.splice(specificationIndex, 1);
    // }

    // update(id: string, { name, description }: ICreateSpecificationDTO): void {
    //     const specificationIndex = this.specifications.findIndex(specification => specification.id === id);
    //     const specification = this.specifications[specificationIndex];
    //     if( name ) specification.name = name;
    //     if( description ) specification.description = description;
    // }

    // getSpecifications(): Specification[] {
    //     return this.specifications;
    // }

    async findByName(name: string): Promise<boolean> {
        const specification = await this.repository.findOne({name});

        return !!specification;
    }
}

export { SpecificationsRepository };