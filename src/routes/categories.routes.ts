import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {       
    return createCategoryController().handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {    
    return listCategoriesController.handle( req, res);
});

const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res);
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