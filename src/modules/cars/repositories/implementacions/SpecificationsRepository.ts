import Specification from "../../model/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "../ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository{

    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository = new SpecificationsRepository();

    private constructor(){
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if( !SpecificationsRepository.INSTANCE ){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification(name, description);
        
        this.specifications.push(specification);
    }

    delete(id: string): void {
        const specificationIndex = this.specifications.findIndex(specification => specification.id === id);
        this.specifications.splice(specificationIndex, 1);
    }

    update(id: string, { name, description }: ICreateSpecificationDTO): void {
        const specificationIndex = this.specifications.findIndex(specification => specification.id === id);
        const specification = this.specifications[specificationIndex];
        if( name ) specification.name = name;
        if( description ) specification.description = description;
    }

    getSpecifications(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): boolean {
        const specification = this.specifications.find(specification => specification.name === name);

        return !!specification;
    }
}

export { SpecificationsRepository };