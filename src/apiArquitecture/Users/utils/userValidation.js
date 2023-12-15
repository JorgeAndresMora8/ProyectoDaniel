import createID from "../../../Resorces/CreateID.js"
import { hashPassword } from "../../../Resorces/hashPassword.js"

export const validateUserData = async (user) => {
    
    if(!user.name) throw new Error("name missing")
    if(!user.email) throw new Error("email missing")
    if(!user.password) throw new Error("password missing")

    user["id"] = createID()
    
    user["password"] = await hashPassword(user.password)

    return user
}