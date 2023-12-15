
import createToken from "../../Auth/token.js"
import UserRepository from "./UserRepository.js"
import { UserDao } from "../../Persistence/DAO.js"
import {createUser, uniqueUser} from "./UserValidations.js"
import { checkPassword } from "./utils/passwordCheck.js"

export default class UserService { 
    constructor(){ 
        this.repository = new UserRepository(UserDao)
    }

    async saveUser(user){

        await this.repository.checkIfUserExits(user.email) //TODO: DELETED
        const userValidated = await createUser(user)
        await this.repository.save(userValidated)
        
        const token = await createToken(user.email)
        return { 
            token:token, 
            user:userValidated
        }
}

async loginUser({email, password}){ 

    const userRegistered = await this.repository.getByEmail(email)
    await checkPassword(password, userRegistered.password)
    const token = await createToken(email) 
    
    
    return {
            token:token, 
            user:userRegistered}   
}

    async getByEmail(userEmail){ 
        const user = await this.repository.getByEmail(userEmail)
        return user.asDTO()

    }
    
    async getById(userId){ 
        const user = await this.repository.getById(userId)
        return await user.asDTO()
    }


    async getAllUser(){ 
        let userList =  await this.repository.getAllUser()
        return userList.map(user => user.asDTO())
    }
}

export const userService = new UserService()