// symbol in javascript

// symbol guaranteed 100% to be unique

const sym = Symbol("name")
const sym2 = Symbol("name")

// console.log(sym === sym2) // false


// symbol as object key
const ageSymbol = Symbol("age")
const person = {
    [ageSymbol]: 25,
    profession: 'Engineer',
    name: 'John'
}
// we cannot access symbol that is used as object key
// in loops
for(key in person) {
    console.log(key) // profession name
}

// accessing property with symbol
console.log(person[ageSymbol]) // 25