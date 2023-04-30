// null coalescing operator (??)
// this operator returns right side variable/value 
// when left side variable is either null or undefined
// else left side variable will be returned


const nullVar = null
console.log(nullVar ?? 'hello')


function greet(name) {
    name = name ?? 'John'
    console.log(`Hi ${name}`)
}

greet() // Hi John
