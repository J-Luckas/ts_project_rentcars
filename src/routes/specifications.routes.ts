import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
// import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();
// const specificationsRepository = new SpecificationsRepository();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

// specificationsRoutes.get("/", (req, res) => {    
//     listSpecificationsController.handle(req, res);
// });

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

