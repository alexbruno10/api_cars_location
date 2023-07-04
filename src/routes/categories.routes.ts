import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'
import multer from 'multer'

const categoriesRoutes = Router()
// const categoriesRepository = CategoriesRepository.getInstance()

//middleware responsavel por pegar o arquivo
const upload = multer({
    dest: "./tmp",
})  

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", listCategoriesController.handle)

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export { categoriesRoutes }
  