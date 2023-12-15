export function updateProductValidation({name, price, units, category, image}){ 
    if(!name) throw new Error("Product name missing")
    if(!price) throw new Error("Product price missing")
    if(!units) throw new Error("Product units missing")
    if(!category) throw new Error("Product category missing")
    if(!image) throw new Error("Product image missing")
}