import { inject, injectable } from 'tsyringe';
import ICategoriesRepository from '../../repositories/ICategoriesRepository';
import { AppError } from '../../../../errors/AppError';

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryService {    
    constructor( 
        @inject('CategoriesRepository')         
        private categoryRepository: ICategoriesRepository
    ) {}    

    async execute( { name, description}: IRequest ): Promise<void>{
        const categoryAlreadyExists = await this.categoryRepository.findByName(name);

        if (categoryAlreadyExists)
            throw new AppError("Category already exists", 403);

        this.categoryRepository.create({ name, description });
    } 
}

export default CreateCategoryService;