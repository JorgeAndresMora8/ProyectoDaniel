import { Router } from "express";
import {infoUser, logoutUser } from "../controllers/UserController.js";
import { userService } from "../apiArquitecture/Users/UserService.js";
import jwt from "jsonwebtoken"
import { SECRET_WORD } from "../config/Env.js";
import { UserDao } from "../Persistence/DAO.js";


export const userRouter = Router()

userRouter.get("/", async (req, res) => { 
    const token = req.headers.token; 
    const userEmail = await jwt.verify(token, SECRET_WORD)
    const user = await UserDao.getByEmail(userEmail['email'])
    res.status(200).json({user:user})
})

userRouter.post("/signup", async (req, res) => { 
    console.log(req.body)
    try {
        const {token, user} = await userService.saveUser(req.body)
        res.status(201).json({auth:true, token:token, user:user})
    } catch (error) {
        res.json({message:error.message})
    }
})

userRouter.post("/login", async (req, res) => { 
    try{ 
        const {token, user} = await userService.loginUser(req.body)
        res.status(200).json({auth:true, token:token, user:user})
    }catch(error){ 
        res.json({message:error.message})
    }   
})

userRouter.get("/logout", await logoutUser)