import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string,
    username: string,
    email: string,
    password: string,
    driver_licence: string
}

interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    // list(): Promise<User[]>;
    create({name, username, email, password, driver_licence}: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO }