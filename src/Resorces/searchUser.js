import {userService} from "../apiArquitecture/Users/UserService.js";
import { comparePassword } from "./hashPassword.js";

export async function loginValidation({email, password}){ 
    if(!email) throw new Error("Email missing")
    if(!password) throw new Error("Password missing")

    const userSearched = await userService.getByEmail(email)
    let isCorrectPassword = await comparePassword(password, userSearched["password"])
    if(isCorrectPassword == false) throw new Error ("Invalid credentials")
    return userSearched
}