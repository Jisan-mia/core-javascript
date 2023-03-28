// What is symbol
// symbol is an another primitive data type like string, number, boolean in javascript which was introduced in es6 


// symbol data type variable initialization
var symbol1 = Symbol()

// symbol with description
var symbol2 = Symbol('This is symbol 2')

console.log(symbol1)
console.log(symbol2)


// characteristics of symbol

// i. though we initiate same Symbol() for all variable but every variable is unique
var symbol3 = Symbol()
var symbol4 = Symbol()
console.log(symbol3 == symbol4)  // false


// ii. if we write Symbol.for('description') then the description will be important
// and we can check for equality, if same description returns true
var name1 = Symbol.for('name1');
var name2 = Symbol.for('name1');
console.log(name1 == name2) // true

// iii. symbol can be use as object property keys like other primitives
// to use symbol as object keys, [keys] should be inside 3rd bracket like dynamic keys
var car = Symbol('This is car symbol');
var obj = {
    model: 'Tesla 3',
    [car]: 'Tesla'
}
console.log(obj)



// why do we need Symbols?
//  i. javascript internally use symbol
var languageObj = {}
languageObj.name = 'JavaScript';
languageObj.estd = '1995';

languageObj[Symbol('founder')] = 'Brendan'
console.log(languageObj)
// we cant access this property or its value by any of iterative way
//  Object.keys(languageObj) or Object.values(languageObj) or in for loop
// we cant access the symbol property inside object


// ii. avoid name collision in global
