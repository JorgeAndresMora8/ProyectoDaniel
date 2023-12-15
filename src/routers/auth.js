import { Router } from "express";
import { loginUser, registerUser, renderLoginPage, renderRegisterPage } from "../controllers/AuthController.js";
export const userRouter = Router()

export const AuthRouter = Router()


//Actions of Login & Register
AuthRouter.post("/register", await registerUser)
AuthRouter.post("/login", await loginUser)