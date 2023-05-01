// bind() method of javascript function

// bind() allows to change what the actual 
// this property means/points to inside of a function

window.name = 'Global name'

const person = {
    name: 'John'
}

function printName() {
    console.log(this.name)
}

printName(); // Global Name

const newPrintName = printName.bind(person) 
console.log(newPrintName()) // john


// implementation
function product(a, b) {
    return a*b;
}

const numbers = [1,2,3,4,5];

const doubleNumbers1 = numbers.map(num => product(2, num))
console.log(doubleNumbers1)

// bind way
const doubleNumbers = numbers.map(product.bind(this, 2))
console.log(doubleNumbers) // [2, 4, 6, 8, 10]