import { ICategoryRepository } from "../../repositories/ICategoriesRepository"
import { inject, injectable } from "tsyringe"

interface IRequest {
    name: string,
    description: string
}

@injectable()
class CreateCategoryUseCase {
    constructor(
    @inject("CategoriesRepository")    
    private categoriesRepository: ICategoryRepository) {
    }

    async execute({ name, description } : IRequest) {
    const nameAlreadyExist = await this.categoriesRepository.findByName(name)

    console.log(nameAlreadyExist);

        if(nameAlreadyExist) {
            throw new Error("Category already exist!")
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }