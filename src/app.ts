import express, { json } from "express";
import routes from "./routes/moviesRoutes.js";
import cors from "cors"
import { handleApplicationsErrors } from "./middlewares/errorMiddlerares.js";

const server = express()
server.use(express.json())
server.use(cors)
server.use(routes)
server.use(handleApplicationsErrors);

server.listen(5000, ()=> console.log("Rodando.."))