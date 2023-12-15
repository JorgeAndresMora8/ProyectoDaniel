import {v4} from "uuid"
import {Store} from "./StoreService.js"

export function productValidation(product){ 
    if(!product.name) throw new Error("Product name missing")
    if(!product.price) throw new Error("Product price missing")
    if(!product.category) throw new Error("Product category missing")
    if(!product.units) throw new Error("Product units missing")
    if(!product.image) throw new Error("Image is missing")
    
    product['id'] = v4()
    return product
}

export async function ensureUniqueProduct({name, price, category, units}){ 
    const searchingProduct = await Store.getByName(name)
    if(searchingProduct == null || undefined){}
    else{ throw new Error(`The product with name ${name} already exits`)}
}