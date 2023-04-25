// array destructuring
const cars = ['Tesla', 'Ferrari', 'Ford']


// normal way to get array items
const tesla1 = cars[0]
const ferrari1 = cars[1]
const [tesla, ferrari] = cars
console.log({tesla, ferrari})

// array destructuring implementation
function addAndMultiply(a, b) {
    return [a+b, a*b];
}
const [sum, product] = addAndMultiply(2,3)
console.log({sum, product})

