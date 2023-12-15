import Order from "./Order.js"

export default class OrderRepository{ 
    constructor(dao){ 
        this.dao = dao
    }

    async createOrder(Order){ 
       await this.dao.save(Order) 
    }

    async getOrdersByEmail(email){ 
        const orderList = await this.dao.getOrders(email)
        return orderList.map((order => new Order(order)))

    }
}