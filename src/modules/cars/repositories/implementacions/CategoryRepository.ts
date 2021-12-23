import Category from "../../model/Category";
import ICategoriesRepository, { iCreateCategoryDTO } from "../ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository{

    private categories: Category[];

    private static INSTANCE: CategoryRepository = new CategoryRepository();

    private constructor(){
        this.categories = [];
    }

    public static getInstance(): CategoryRepository{
        if( !CategoryRepository.INSTANCE ){
            CategoryRepository.INSTANCE = new CategoryRepository();
        }

        return CategoryRepository.INSTANCE;
    }

    getCategories(): Category[]{
        return this.categories;
    }

    create( { name, description }: iCreateCategoryDTO ): void{
        const category = new Category( name, description );    
        this.categories.push( category );
    }

    delete( id: string ): void{
        const categoryIndex = this.categories.findIndex( category => category.id === id );
        this.categories.splice( categoryIndex, 1 );
    }

    update( id: string, { name, description }: iCreateCategoryDTO ): void{
        const categoryIndex = this.categories.findIndex( category => category.id === id );
        const category = this.categories[categoryIndex];
        if( name ) category.name = name;
        if( description ) category.description = description;
    }

    findByName( name: string ): Category | undefined{
        return this.categories.find( category => category.name === name );
    }
}

export default CategoryRepository;