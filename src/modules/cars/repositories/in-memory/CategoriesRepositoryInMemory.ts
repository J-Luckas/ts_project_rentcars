import Category from "../../entities/Category";
import ICategoriesRepository, { iCreateCategoryDTO } from "../ICategoriesRepository";


export class CategoriesRepositoryInMemory implements ICategoriesRepository {

    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(category => category.name === name);
        return category;
    }

    async getCategories(): Promise<Category[]> {
        return this.categories;
    }
    async create({ name, description }: iCreateCategoryDTO): Promise<void> {
        this.categories = [ ...this.categories, new Category(name, description)];


    }

}