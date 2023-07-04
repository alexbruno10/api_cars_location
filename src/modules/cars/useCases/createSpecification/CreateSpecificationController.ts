import { Response, Request } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";

class CreateSpecificationController {

    async handle(req: Request, res: Response): Promise<Response> {

    console.log('chegou no handle');
    const { name, description } = req.body

    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)

    await createSpecificationUseCase.execute({name, description})

    return res.status(201).send()

    }

}

export {CreateSpecificationController}