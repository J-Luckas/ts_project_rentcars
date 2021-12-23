import Specification from "../model/Specification";

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationRepository {

    create( { name, description }: ICreateSpecificationDTO ) : void;
    findByName( name: string ): boolean;
    getSpecifications(): Specification[];    
    update(id: String, { name, description }: ICreateSpecificationDTO): void;
    delete(id: String): void;

}

export { ISpecificationRepository, ICreateSpecificationDTO };