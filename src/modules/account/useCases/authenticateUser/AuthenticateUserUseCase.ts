import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import { AppError } from "../../../../errors/AppError"

interface IRequest {
    email: string,
    password: string
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email)

        if(!user) {
            throw new AppError("Email or password incorrect!")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new AppError("Email or password incorrect!")
        }

        const token = sign({}, "41a4414f629e3f38c4cf9fe4e92f352b", {
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn

    }

}

export { AuthenticateUserUseCase }