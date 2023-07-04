import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository'
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications'

const specificationsRoutes = Router()
const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post("/", createSpecificationController.handle)

specificationsRoutes.get("/", (req, res) => {
    return listSpecificationsController.handle(req, res)
})

export { specificationsRoutes }
