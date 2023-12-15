import CreateID from "../../Resorces/CreateID.js"

export default class User{ 
    #id
    #name
    #email
    #password
    constructor({name, lastname, email, password, id}){ 
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
    }

    asDTO(){ 
        return Object.freeze({ 
            id: this.#id, 
            name: this.#name, 
            email: this.#email, 
            password: this.#password, 
        })


    }
}