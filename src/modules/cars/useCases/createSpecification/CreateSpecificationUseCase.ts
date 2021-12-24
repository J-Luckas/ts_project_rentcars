import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface iRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {

    constructor( 
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationRepository ){}

    async execute( { name, description }: iRequest ): Promise<void>{
        const specificationAlreadyExists = await this.specificationsRepository.findByName(name);
        if( specificationAlreadyExists ){
            throw new Error("Specification already exists");
        }
        await this.specificationsRepository.create({ name, description });
    }
}

export default CreateSpecificationUseCase;