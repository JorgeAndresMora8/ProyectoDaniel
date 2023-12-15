import { hashPassword } from "../../Resorces/hashPassword.js"
import User from "./User.js"
import { userService } from "./UserService.js"
import { validateUserData } from "./utils/userValidation.js"


export async function uniqueUser(userToCheck) { 
    const users = await userService.getAllUser()
    users.forEach(user => { 
        if (user.email == userToCheck) throw new Error("This user is already in use")
    })
}

export async function createUser(user){ 


    const userValidated = await validateUserData(user)

    

    const UserToSave = new User({ 
        name:userValidated.name, 
        email:userValidated.email, 
        password:userValidated.password, 
        id:userValidated.id
    })

    return UserToSave.asDTO()
}

