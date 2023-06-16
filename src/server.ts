import express, { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import 'reflect-metadata'

import swaggerFile from './swagger.json'

// import "./database"
import { AppDataSource } from './database/data-source'

import { router } from './routes'

const app = express()

app.use(express.json())

AppDataSource.initialize()
    .then(() => {
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
        
        app.use(router)
        
        app.listen(3333, () => console.log('Server is running!'))
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
