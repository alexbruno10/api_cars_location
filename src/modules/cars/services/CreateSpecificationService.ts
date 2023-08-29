import { AppError } from "../../../errors/AppError"
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository"
 
interface IRequest {
    name: string,
    description: string
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {
    }

    execute({ name, description } : IRequest) {
    const specificationAlreadyExist = this.specificationsRepository.findByName(name)

        if(specificationAlreadyExist) {
            throw new AppError("Category already exist!")
        }

        this.specificationsRepository.create({ name, description })
    }
}

export { CreateSpecificationService }