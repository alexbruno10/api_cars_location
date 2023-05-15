import { CategoriesRepository } from "../repositories/CategoriesRepository"

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {
    }

    execute({ name, description } : IRequest) {
    const nameAlreadyExist = this.categoriesRepository.findByName(name)

        if(nameAlreadyExist) {
            throw new Error("Category already exist!")
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryService }