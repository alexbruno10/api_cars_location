import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

interface IRequest {
    name: string,
    username: string,
    email: string,
    password: string,
    driver_licence: string
}

@injectable()
class CreateUserUseCase {
 
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({ name, username, email, password, driver_licence }: IRequest) {
        const emailAlreadyExist = await this.userRepository.findByEmail(email)

        if(emailAlreadyExist) {
            throw new Error("Email already exist!")
        }

        const passwordHash = await hash(password, 8)

        this.userRepository.create({name, username, email, password: passwordHash, driver_licence})
    }

}

export { CreateUserUseCase }