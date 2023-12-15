import jwt from 'jsonwebtoken'
import { SECRET_WORD } from '../config/Env.js'

export default async function createToken(userEmail){ 
    const token = await jwt.sign({"email": userEmail}, SECRET_WORD, 
        {expiresIn:60*60*25})
    return token
}