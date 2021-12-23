import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {    
    return listCategoriesController.handle( req, res);
});

// categoriesRoutes.delete("/:id", (req, res) => {
//     categoryRepository.delete(req.params.id);
//     res.sendStatus(204);
// });

// categoriesRoutes.patch("/:id", (req, res) => {
//     const { name, description} = req.body;

//     categoryRepository.update(req.params.id, { name, description });
    
//     res.sendStatus(204);
// });

export { categoriesRoutes };