import createID from "../../Resorces/CreateID.js"

export default class Review {
    #author
    #opinion
    #description
    #id
    constructor({author, opinion, description, id}){ 
        this.#author = author
        this.#opinion = opinion
        this.#description = description
        this.#id =  id
    }

    asDTO(){ 
        return Object.freeze ({ 
            author: this.#author,
            opinion: this.#opinion, 
            description: this.#description,
            id: this.#id
        })
    }
}