
import Product from "./Product.js"
import { ProductDao } from "../../Persistence/DAO.js"
import StoreRepository from "./StoreRepository.js"
import {productValidation} from "./ProductValidation.js"

export class StoreService { 
    constructor(){ 
        this.repository = new StoreRepository(ProductDao)
    }

    async getAllProducts(){ 
        const productList = await this.repository.getAll()
        return productList.map(product => product.asDTO())
    }

    async save(productData){ 
        productValidation(productData)
        const newProduct = new Product(productData)
        await this.repository.save(newProduct)
    }

    async getByName(productName){ 
        const products = await this.repository.getByName(productName)
        return products.map(product => product.asDTO())
    }

    async getByCategory(category){ 
        const products = await this.repository.getByCategory(category)
        return products.map(product => product.asDTO())
    }

    async updateProduct(productId, productData) { 
        const productUpdated = await this.repository.updateProduct(productId, productData)
        return productUpdated
    }

    async getLowerPrice(quanity){ 
        const products = await this.repository.getLowerPrice(quanity)
        return products.map(product => product.asDTO())
    }

    async getById(productId){ 
        const product = await this.repository.getById(productId)
        return product.asDTO()
    }
    async delete(productId){ 
        await this.repository.deleteProduct(productId)
    }
}

export const Store = new StoreService()