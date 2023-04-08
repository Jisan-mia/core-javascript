// discount currying
function discount(disc) {
    return function(price){
        return price - price * disc
    }
}

let tenPercentDiscount = discount(0.1); // partial function \ a currying is a combination of multiple partial function
let twentyPercentDiscount = discount(0.2)

const customer1D = tenPercentDiscount(600)
const customer2D = tenPercentDiscount(700)
const customer3D = tenPercentDiscount(800)

const customer4D = twentyPercentDiscount(1200)


console.log({customer1D, customer2D, customer3D , customer4D})



// 