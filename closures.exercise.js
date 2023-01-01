// exercise 1 : // what will it show: "John" or "Pete"?
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();
/*
answer: Pete
- the function uses the most recent value of variable name
*/

// exercise 2: Write function sum that works like this: sum(a)(b) = a+b
function sum(a) {
  return function (b) {
    return a+b
  }
}
console.log(sum(1)(2)) // 3


// exercise 3: array.filter(f) method filters all elements through the function f
// if it returns true, then the current element returned to the resulting array
// 1. make an filter function named inBetween(a,b) that returns only elements in between a and b(inclusive)
// 2. make an filter function named inArray([...]) that returns only elements matching with one of the elements of the original array
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a,b) {
  return function(currentVal) {
    return currentVal >= a && currentVal <= b;
  }
}

const between2_5 = arr.filter(inBetween(2,5)) // [2,3,4,5]
console.log(between2_5)

function inArray(arr) {
  return function (currentVal) {
    return arr.includes(currentVal)
  }
}

const result1 = arr.filter(inArray([4,6,10])) // [4,6]
console.log(result1)


// exercise 4: sort by filed function
// we want to sort array of objects by the object fields using sort() array method
// now create a function for Array.sort(f) method(since sort method runs a function(f) over every elements)
// now create that function sort(f) takes as argument and sorts the object by field

const studentObj = [
  {name: 'Shaown', roll: 6},
  {name: 'Shakil', roll: 25},
  {name: 'Mursalin', roll: 10},
  {name: 'Porag', roll: 5}
]

function sortByField(fieldName) {
  return function(a,b) {
    return a[fieldName] > b[fieldName] ? 1 : -1
  }
}


studentObj.sort(sortByField('roll'))
console.log(studentObj);
