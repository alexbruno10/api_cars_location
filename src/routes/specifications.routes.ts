import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController'

const specificationsRoutes = Router()
const createSpecificationController = new CreateSpecificationController()
const listSpecificationsController = new ListSpecificationsController()

specificationsRoutes.post("/", createSpecificationController.handle)

specificationsRoutes.get("/", listSpecificationsController.handle)

export { specificationsRoutes }
