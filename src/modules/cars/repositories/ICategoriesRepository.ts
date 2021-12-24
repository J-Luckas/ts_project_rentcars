import Category from "../entities/Category";

interface iCreateCategoryDTO {
    name: string;
    description: string;    
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    getCategories(): Promise<Category[]>;
    create({ name, description }: iCreateCategoryDTO): Promise<void>;
    // update(id: String, { name, description }: iCreateCategoryDTO): void;
    // delete(id: String): void;
}

export default ICategoriesRepository;
export { iCreateCategoryDTO };

