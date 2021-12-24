import Specification from "../entities/Specification";

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationRepository {

    create( { name, description }: ICreateSpecificationDTO ) : Promise<void>;
    findByName( name: string ): Promise<boolean>;
    // getSpecifications(): Promise<Specification[]>;    
    // update(id: String, { name, description }: ICreateSpecificationDTO): void;
    // delete(id: String): void;

}

export { ISpecificationRepository, ICreateSpecificationDTO };