// spread operator
// spread operator is used to copy array elements and object properties/methods to another variable
// after copying we can add more elements to array and more properties/methods to objects
// n.b. spread operator can only shallow copy array elements or object properties/methods
// if we add same elements to array or same properties/methods to object using spread operator
// the last added one will add

// copying array using spread operator
const numbers = [1, 2, 3,4, 5]
const copiedNumbers = [...numbers, 6]
console.log(copiedNumbers) //[ 1, 2, 3, 4, 5, 6 ]


// copying objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: '121b street',
        city: 'new york'
    }
}

const copiedPerson = {
    ...person,
    age: 22,
    firstName: 'Jane'
}

console.log(copiedPerson)
