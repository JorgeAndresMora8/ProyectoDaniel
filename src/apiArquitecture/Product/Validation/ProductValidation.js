export async function validateId(id){ 
    if(!id) throw new Error("Product id missing. Please provide one");

    return id;
}

export async function name(productName){ 
    if(!productName) throw new Error("Product id missing. Please provide one");
    if(productName.lenght() <= 1) throw new Error("Product name to short to save"); 

    return productName;

}

export async function validatePrice(productPrice){ 
    if(!productPrice) throw new Error("Product price missing. Please provide one")
    if(productPrice <= 0) throw new Error("Product price cant be equal to zero.")

    return productPrice
}

export async function validateCategory(id){ 
    if(!id) throw new Error("Product id missing. Please provide one")
}

export async function validateId(id){ 
    if(!id) throw new Error("Product id missing. Please provide one")
}