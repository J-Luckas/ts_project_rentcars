import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";
import { AppError } from '../../../../errors/AppError';

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
            throw new AppError("Specification already exists", 401);
        }
        await this.specificationsRepository.create({ name, description });
    }
}

export default CreateSpecificationUseCase;