import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body

    const nameAlreadyExist = categoriesRepository.findByName(name)

    if(nameAlreadyExist) {
        return res.status(400).json({error: "Category Already Exists"})
    }

    categoriesRepository.create({ name, description })

    return res.status(201).send()
})

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list()

    return res.json(all)
})

export { categoriesRoutes }
