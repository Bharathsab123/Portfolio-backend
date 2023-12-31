import express from"express"
import dotenv from "dotenv"
import cors from "cors"
import userrouter from "./router/user.js"


dotenv.config()
const app =express()
const PORT=process.env.PORT
app.use(express.json())
app.use(cors())
app.use("/user",userrouter)
app.listen(PORT,()=>{console.log("server is running")})