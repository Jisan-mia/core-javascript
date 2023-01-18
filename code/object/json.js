// JSON = JavaScript Object Notation
// it's inspired by object literal syntax in JavaScript

// object literal syntax
var objectLiteral = {
  name: 'Jack',
  age: 19,
  isStudent: true
}
// javascript has built-in features to transfer javascript object literal into json data
console.log(JSON.stringify(objectLiteral));

// json syntax
/*
- json data is used to transfer data across the internet
- json data property have to be written inside quote("")
- all valid json is valid javascript object literal but
- not all valid javascript object literal is valid json
*/

var json = '{"name": "Jack", "age": 19, "isStudent": true}'

// also javascript can transfer json data into object literal
console.log(JSON.parse(json));
