import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated'

const specificationsRoutes = Router()
const createSpecificationController = new CreateSpecificationController()
const listSpecificationsController = new ListSpecificationsController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpecificationController.handle)

specificationsRoutes.get("/", listSpecificationsController.handle)

export { specificationsRoutes }
