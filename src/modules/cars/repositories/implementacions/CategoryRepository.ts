import { getRepository, Repository } from "typeorm";
import Category from "../../entities/Category";
import ICategoriesRepository, { iCreateCategoryDTO } from "../ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository{

    private repository: Repository<Category>;

    constructor(){
        this.repository = getRepository( Category );
    }

    async getCategories(): Promise<Category[]>{
        const categories = await this.repository.find();
        return categories;
    }

    async create( { name, description }: iCreateCategoryDTO ): Promise<void>{
        const category = this.repository.create( { name, description } );
        
        await this.repository.save( category );
    }

    // delete( id: string ): void{
    //     const categoryIndex = this.categories.findIndex( category => category.id === id );
    //     this.categories.splice( categoryIndex, 1 );
    // }

    // update( id: string, { name, description }: iCreateCategoryDTO ): void{
    //     const categoryIndex = this.categories.findIndex( category => category.id === id );
    //     const category = this.categories[categoryIndex];
    //     if( name ) category.name = name;
    //     if( description ) category.description = description;
    // }

    async findByName( name: string ): Promise<Category | undefined>{
        return await this.repository.findOne( { name } );
    }
}

export default CategoryRepository;