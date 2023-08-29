import { inject, injectable } from "tsyringe"
import { ICategoryRepository } from "../../repositories/ICategoriesRepository"
import { AppError } from "../../../../errors/AppError"

interface IRequest {
    name: string,
    description: string
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ICategoryRepository) {
    }

    async execute({ name, description } : IRequest) {
    const nameAlreadyExist = await this.specificationRepository.findByName(name)

        if(nameAlreadyExist) {
            throw new AppError("Category already exist!")
        }

        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }