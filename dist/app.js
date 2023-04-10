import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import { handleApplicationsErrors } from "./middlewares/errorMiddlerares.js";
var server = express();
server.use(express.json());
server.use(cors);
server.use(routes);
server.use(handleApplicationsErrors);
server.listen(5000, function () { return console.log("Rodando.."); });
