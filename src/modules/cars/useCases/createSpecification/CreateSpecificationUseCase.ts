import { ICategoryRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
    name: string,
    description: string
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ICategoryRepository) {
    }

    execute({ name, description } : IRequest) {
    const nameAlreadyExist = this.specificationRepository.findByName(name)

        if(nameAlreadyExist) {
            throw new Error("Category already exist!")
        }

        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }