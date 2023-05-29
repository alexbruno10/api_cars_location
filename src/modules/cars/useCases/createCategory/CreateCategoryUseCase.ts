import { ICategoryRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
    name: string,
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) {
    }

    execute({ name, description } : IRequest) {
    const nameAlreadyExist = this.categoriesRepository.findByName(name)

        if(nameAlreadyExist) {
            throw new Error("Category already exist!")
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }