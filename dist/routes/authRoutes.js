import { Router } from "express";
import authControllers from "../controllers/authControllers.js";
var authRouter = Router();
authRouter.post("/sign-up", authControllers.signUp);
authRouter.post("/sign-in", authControllers.signIn);
export default authRouter;
