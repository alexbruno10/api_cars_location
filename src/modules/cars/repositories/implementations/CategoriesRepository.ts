import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoryRepository {

    private categories: Category[]

    //singleton para instanciar uma classe
    private static INSTANCE: CategoriesRepository

    private constructor() {
        // this.categories = []
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }
        return CategoriesRepository.INSTANCE
    }

    async create( {name, description} : ICreateCategoryDTO ) : Promise<void> {

        // const category = new Category()
        // //Forma de atribuir os valores no objeto 
        // Object.assign(category, {
        //     name,
        //     description,
        //     created_at: new Date()
        // })


        await prismaClient.categories.create({
            data: {
                name,
                description
            }
        })
        // this.categories.push(category)

    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find((category) => category.name === name)
        return category
    }
     
}

export { CategoriesRepository }