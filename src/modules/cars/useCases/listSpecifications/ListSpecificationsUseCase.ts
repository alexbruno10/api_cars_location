import { inject, injectable } from "tsyringe"
import { Specification } from "../../entities/Specification"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"


@injectable()
class ListSpecificationsUseCase {

    constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository) {
    }

    async execute(): Promise<Specification[]> {
        const speficiations =  await this.specificationsRepository.list()

        return speficiations
    }

}

export { ListSpecificationsUseCase }