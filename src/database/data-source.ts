import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { CreateCategories1687814956262 } from "./migrations/1687814956262-CreateCategories"

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
    migrations: [CreateCategories1687814956262],
    subscribers: [],
})
