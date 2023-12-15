export default class Product{

    #id
    #name
    #price
    #category
    #units
    #image

    constructor({name, price, units, category, id, image}){ 
        this.#id = id
        this.#name = name
        this.#price = price
        this.#units = units
        this.#category = category
        this.#image = image
    } 


    asDTO(){ 
        return Object.freeze({ 
            id:this.#id,
            name: this.#name, 
            category: this.#category, 
            price: this.#price, 
            units: this.#units, 
            image: this.#image
        })
    }
}