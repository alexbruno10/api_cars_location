import { prismaClient } from "../../../../database/prismaClient";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    constructor() {
      
    }

    async create( {name, username, email, password, driver_licence} : ICreateUserDTO ) : Promise<void> {

        await prismaClient.users.create({
            data: {
                name,
                username,
                email, 
                password,
                driver_licence
            }
        })
    }

    // async list(): Promise<User[]> {
    //     const categories = await prismaClient.categories.findMany()
    //     return categories
    // }

    async findByEmail(email: string): Promise<User> {
        const emailAlreadyExist = await prismaClient.users.findUnique({
            where: {
                email,
            }
        })
        return emailAlreadyExist
    }
     
}

export { UsersRepository }