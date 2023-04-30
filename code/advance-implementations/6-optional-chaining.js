// optional chaining
// check for null or undefined value
// if the left side variable is null/undefined it immediately stops otherwise it will go onward
// optional chaining works pretty much on everything in javascript
// with objects, arrays, event functions we can use optional chaining


const john = {
    firstName: 'John',
    age: 25,
    // address: {
    //     street: '123 main street'
    // },
    // sayHi() {
    //     console.log(`hi ${this.firstName}`)
    // },
    // hobbies: ['gardening', 'cricket']

}
// optional chaining in accessing object properties
function printAddress(person) {
    console.log(person?.address?.street) // undefined
}
printAddress(john)

// optional chaining in function call
function callSayHiFunc(person) {
    person?.sayHi?.() // undefined
}
console.log(callSayHiFunc(john))

// optional chaining in accessing arrays elements
function printHobbyTwo(person) {
    console.log(person?.hobbies?.[1]) // undefined
}
printHobbyTwo(john)