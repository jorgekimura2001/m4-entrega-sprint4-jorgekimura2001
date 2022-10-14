import "reflect-metadata"
import express from "express"
import userRouters from "./routers/users.router"
import sessionRouters from "./routers/sessions.router"

const app = express()
app.use(express.json())
app.use('/users', userRouters)
app.use('/login', sessionRouters)

export default app