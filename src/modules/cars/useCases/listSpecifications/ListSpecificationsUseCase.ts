import { Specification } from "../../model/Specification"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"



class ListSpecificationsUseCase {

    constructor(private specificationsRepository: ISpecificationsRepository) {
    }

    execute(): Specification[] {
        const speficiations = this.specificationsRepository.list()

        return speficiations
    }

}

export { ListSpecificationsUseCase }