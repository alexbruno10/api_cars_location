import { ICategoryRepository } from "../../repositories/ICategoriesRepository"

interface IRequest {
    name: string,
    description: string
}

class ImportCategoryUseCase {
    constructor() {
    }

    execute(file: any) {
        console.log(file);

    }
}

export { ImportCategoryUseCase }