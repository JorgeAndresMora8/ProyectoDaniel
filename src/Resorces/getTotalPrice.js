export function getTotalPrice(productInCar){
    let total = 0;
    for(let i=0; i<productInCar.length; i++){ 
    total += (productInCar[i].price * productInCar[i].units)
    }

    return total
}