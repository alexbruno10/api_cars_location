import { prismaClient } from "../../../../database/prismaClient";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[]

    //singleton para instanciar uma classe
    private static INSTANCE: SpecificationsRepository

    constructor() {
        
    }

    public static getInstance(): SpecificationsRepository {
        if(!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository()
        }
        return SpecificationsRepository.INSTANCE
    }
    
    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        await prismaClient.specifications.create({
            data: {
                name,
                description
            }
        })
    }

    async findByName(name: string): Promise<Specification> {
        const nameAlreadyExist = await prismaClient.specifications.findUnique({
            where: {
                name,
            }
        })
        return nameAlreadyExist
    }

    async list(): Promise<Specification[]> {
        const specifications = await prismaClient.specifications.findMany()
        return specifications
    }
}

export { SpecificationsRepository }