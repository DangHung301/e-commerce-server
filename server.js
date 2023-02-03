import express from "express"
import * as dotenv from 'dotenv' 
import { authRouter } from "./router/index.js"

dotenv.config()

let  app = express();
let port = process.env.PORT ?? 3000

app.use(express.json())

app.use('/auth', authRouter)

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
})