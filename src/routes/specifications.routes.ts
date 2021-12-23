import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();
// const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
    createSpecificationController.handle(req, res);
});

specificationsRoutes.get("/", (req, res) => {    
    listSpecificationsController.handle(req, res);
});

// specificationsRoutes.delete("/:id", (req, res) => {
//     specificationsRepository.delete(req.params.id);
//     res.sendStatus(204);
// });

// specificationsRoutes.patch("/:id", (req, res) => {
//     const { name, description} = req.body;

//     specificationsRepository.update(req.params.id, { name, description });
    
//     res.sendStatus(204);
// });
export { specificationsRoutes };

