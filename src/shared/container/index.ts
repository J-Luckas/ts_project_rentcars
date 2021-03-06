import { container } from "tsyringe";
import  ICategoriesRepository from "../../modules/cars/repositories/ICategoriesRepository";
import  CategoriesRepository from "../../modules/cars/repositories/implementations/CategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);
container.registerSingleton<ISpecificationRepository>('SpecificationsRepository', SpecificationsRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);