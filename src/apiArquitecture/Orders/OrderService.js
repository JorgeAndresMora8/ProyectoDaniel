import OrderRepository from "./OrderRepository.js"
import { OrderDao } from "../../Persistence/DAO.js"
import createID from "../../Resorces/CreateID.js"
import Order from "./Order.js"
import { getTotalPrice } from "../../Resorces/getTotalPrice.js"
import { sendEmail } from "../../nodemailer/nodemailerConfig.js"

class OrderService{ 
    constructor(){ 
        this.repository = new OrderRepository(OrderDao)
    }

    async createOrder( productCartList ,userName, userEmail){
        
        const total = getTotalPrice(productCartList)

        const OrderData = { 
            id:createID(), 
            clientName:userName, 
            clientEmail:userEmail, 
            date: new Date(), 
            products: productCartList, 
            total:total
        }

        const formattedOrder = new Order(OrderData)
        await sendEmail(userEmail, productCartList, total)
        await this.repository.createOrder(formattedOrder.asDTO())
    }


    async getOrders(userEmail){ 

        const orderList = await this.repository.getOrdersByEmail(userEmail)
        return orderList
    }
}

export const orderService = new OrderService()
