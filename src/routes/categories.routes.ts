import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import multer from 'multer'

const categoriesRoutes = Router()
// const categoriesRepository = CategoriesRepository.getInstance()

//middleware responsavel por pegar o arquivo
const upload = multer({
    dest: "./tmp",
})  

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res)
})

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res)
})

export { categoriesRoutes }
  