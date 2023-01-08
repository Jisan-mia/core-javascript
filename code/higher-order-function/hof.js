// higher order function
/*
* functions in javascript are special type of object

- We can assign function to a variable
- we can pass function as parameter to another function
- and also we can return a function from a function

* Higher order function is a type of function which works on another function
  - A function which takes another function as an argument or
  - returns a function
  - or both
*/

// simple example
function myFunc() {
  return function () {
    console.log('Hello, function')
  }
}

myFunc()()


// examples
// double every number of an array
// without HOF
const arr = [1,2,3,4,5,6];

let result = [];

for(let i=0; i < arr.length; i++) {
  result.push(arr[i]*2)
}
// console.log(result) // [2,4,6]

// with built-in higher order function map(map is a higher order function)
function doubleIt(number) {
  return number*2
}
const result1 = arr.map(doubleIt)
// console.log(result1); // [2,4,6]

// same as map, filter() is another built in higher order function which takes a testing function
// with each array item as parameter. returns true if the item pass the test
// example 2 (return all the number of the array which is getter than or equal 4)
const getterThanThree = arr.filter(num => num >= 4)
// console.log(getterThanThree) // [4,5,6]


// creating our own higher order function ourMap()
// alternative of map() method
const cars = [
  {
    name: 'Tesla',
    highestSpeed: 260
  },
  {
    name: 'Ford',
    highestSpeed: 350
  },
  {
    name: 'Ferrari',
    highestSpeed: 380
  }
]
function ourMap(arr, mapFunc) {
  const tempArr = [...arr]
  const resultArr = []
  tempArr.forEach((item, index) => {
    resultArr.push(mapFunc(item, index, tempArr))
  });
  return resultArr
}

const carsWithId = ourMap(cars, function(item, index) {
  return {
    ...item,
    id: index+1
  }
})
console.log(carsWithId)

const cubeIt = ourMap(arr, (item) => item*3)
console.log(cubeIt)

