export default class Order{ 
    constructor({clientName, clientEmail, date, products, total, id}){ 
        this.clientName = clientName 
        this.clientEmail = clientEmail 
        this.date = date 
        this.products = products
        this.total = total 
        this.id = id
    }

    asDTO(){ 
        return Object.freeze({ 
            id:this.id, 
            clientName: this.clientName, 
            clientEmail: this.clientEmail, 
            date: this.date, 
            products: this.products, 
            total: this.total
        })
    }
}