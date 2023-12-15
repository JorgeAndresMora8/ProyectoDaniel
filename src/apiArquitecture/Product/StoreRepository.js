import Product from "./Product.js"

export default class StoreRepository { 
    constructor(dao){ 
        this.dao = dao
    }

    async save(newPlate){ 
        await this.dao.save(newPlate.asDTO())
    }

    async getAll(){ 
        const productList = await this.dao.getAll()
        return productList.map(product => new Product(product))
    }

    async getByName(productName){ 
        let products = await this.dao.getByName(productName)
        return products.map(product => new Product(product))
    }

    async getById(productId){ 
        let product = await this.dao.getById(productId)
        product = new Product(product)
        return product
    }

    async getByCategory(category){ 
        const products = await this.dao.getByCategory(category)
        return products.map(product => new Product(product))
    }

    async getLowerPrice(quanity){ 
        const products = await this.dao.searchLessThan(quanity)
        if (products.length == 0) return "dont found"
        else return products.map(product => new Product(product))
    }
    
    async updateProduct(id, product){ 
        await this.dao.updateProduct(id, product)
    }

    async deleteProduct(id){ 
        await this.dao.deleteById(id)
    }
}