import Category from "../model/Category";

interface iCreateCategoryDTO {
    name: string;
    description: string;    
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    getCategories(): Category[];
    create({ name, description }: iCreateCategoryDTO): void;
    update(id: String, { name, description }: iCreateCategoryDTO): void;
    delete(id: String): void;
}

export default ICategoriesRepository;
export { iCreateCategoryDTO };

