import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { CreateUsersTable1686876153463 } from "./migrations/1686876153463-CreateUsersTable"
import { CreateUsersTableTest1687214515300 } from "./migrations/1687214515300-CreateUsersTableTest"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "rentx",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1686876153463, CreateUsersTableTest1687214515300],
    subscribers: [],
})
