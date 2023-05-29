import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications'

const specificationsRoutes = Router()
const specificationRepository = new SpecificationsRepository()

specificationsRoutes.post("/", (req, res) => {
    return createSpecificationController.handle(req, res)
})

specificationsRoutes.get("/", (req, res) => {
    return listSpecificationsController.handle(req, res)
})

export { specificationsRoutes }
