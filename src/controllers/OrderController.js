import {orderService} from "../apiArquitecture/Orders/OrderService.js"
import jwt from "jsonwebtoken"
import { SECRET_WORD } from "../config/Env.js"

export async function createOrder(req, res){

    const {cart, name, email, id} = req.body


    try{ 
        await orderService.createOrder(cart, name, email)
        res.status(201).json({"ORDER_STATE":"SUCCESS", "MESSAGE":"ORDER FINISHED SUCCESFULLY"})
    }   catch(error){ 
            console.log(error);
    }
    
}


export async function getOrders(req, res){ 
    const token = req.headers['authorization']; 
    const {email} = await jwt.decode(token, SECRET_WORD)
    
    const userOrderRegisteredList = await orderService.getOrders(email)
    res.status(200).json({orders:userOrderRegisteredList})
}