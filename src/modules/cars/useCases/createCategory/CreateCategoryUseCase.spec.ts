
import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import CreateCategoryUseCase from "./CreateCategoryUseCase";


let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    });

    it( 'Should be able to create a new category', async () => {
        
        const category = {
            name: 'Category 1', 
            description: 'Category 1 description' 
        }

        await createCategoryUseCase.execute( category );

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name );

        expect(categoryCreated).toHaveProperty('name', category.name);

    } );

    it( 'Should not be able to create a category bc already exists', async() => {
        
        expect( async () => {
            const category = {
                name: 'Category 1', 
                description: 'Category 1 description' 
            };
            await createCategoryUseCase.execute( category );
            await createCategoryUseCase.execute( category );
        } ).rejects.toBeInstanceOf(AppError);

    });

});