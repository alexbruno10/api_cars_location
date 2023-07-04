import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoryRepository {

    private categories: Category[]

    //singleton para instanciar uma classe
    private static INSTANCE: CategoriesRepository

    constructor() {
        // this.categories = []
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }
        return CategoriesRepository.INSTANCE
    }

    async create( {name, description} : ICreateCategoryDTO ) : Promise<void> {

        await prismaClient.categories.create({
            data: {
                name,
                description
            }
        })
    }

    async list(): Promise<Category[]> {
        const categories = await prismaClient.categories.findMany()
        return categories
    }

    async findByName(name: string): Promise<Category> {
        const nameAlreadyExist = await prismaClient.categories.findUnique({
            where: {
                name,
            }
        })
        return nameAlreadyExist
    }
     
}

export { CategoriesRepository }