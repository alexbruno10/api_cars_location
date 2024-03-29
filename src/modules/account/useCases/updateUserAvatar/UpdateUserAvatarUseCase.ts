import { privateDecrypt } from "crypto";
import { Provider, inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string,
    avatar_file: string,
}

class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id)

        user.avatar = avatar_file

        await this.usersRepository.create(user)
    }
}

export { UpdateUserAvatarUseCase }