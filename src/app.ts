import express, { json } from "express";
import routes from "./routes/index.js";
import cors from "cors"

const server = express()
server.use(express.json())
server.use(cors)
server.use(routes)

server.listen(5000, ()=> console.log("Rodando.."))