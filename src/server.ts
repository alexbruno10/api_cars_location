import express, { Router } from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationsRoutes } from './routes/specifications.routes'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.listen(3333, () => console.log('Server is running!'))