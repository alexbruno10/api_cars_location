import { inject, injectable } from "tsyringe"
import { ICategoryRepository } from "../../repositories/ICategoriesRepository"

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
            throw new Error("Category already exist!")
        }

        this.specificationRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }