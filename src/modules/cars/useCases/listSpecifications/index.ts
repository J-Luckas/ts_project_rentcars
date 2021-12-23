import { SpecificationsRepository } from "../../repositories/implementacions/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase( specificationRepository );
export const listSpecificationsController = new ListSpecificationsController( listSpecificationsUseCase );