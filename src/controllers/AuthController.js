import {userService} from "../apiArquitecture/Users/UserService.js";
import createToken from "../Auth/token.js";
import { loggerError, loggerInfo } from "../loggers/loggerConfig.js";
import { loginValidation } from "../Resorces/searchUser.js";

export function renderLoginPage(req, res){ 
    res.render("login")
}

export function renderRegisterPage(req, res){ 
    res.render("register")
}

export async function registerUser(req, res){ 
    try{
        let userData = req.body;
        userData['admin'] = false;
        const token = await userService.saveUser(userData)
        res.cookie("token", token, { maxAge: 900000, httpOnly: true })
        // res.redirect("/api/products")
        res.status(200).json({"Access-token":token})
        loggerInfo.info(`NEW USER REGISTERED: ${userData.email}`)
    }catch(error){ 
       res.render("errorPage", {message:error.message})
       loggerError.error(`ERROR IN REGISTER PROCESS: ${error.message}`)
    } 
}

export async function loginUser(req, res){ 
    try {
        const user = await loginValidation(req.body)
        const token = await createToken(user.email)
        res.cookie("token", token)
        // res.redirect("/api/products")
        res.status(200).json({"TOKEN":token})
        loggerInfo.info(`USER LOGIN: ${user.email}`)
    } catch (error) {
        // res.render("errorPage", {message:error.message})
        res.status(400).json({"ERROR":`${error}`})
        loggerError.error(`ERROR IN LOGIN PROCESS: ${error.message}`)
    }
}