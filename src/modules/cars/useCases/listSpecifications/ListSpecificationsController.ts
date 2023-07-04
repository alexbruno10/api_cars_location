import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { container } from "tsyringe";

class ListSpecificationsController {


    async handle(req: Request, res: Response): Promise<Response> {

    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
    
    const all =  await listSpecificationsUseCase.execute()

    return res.json(all)
    }

}

export { ListSpecificationsController }