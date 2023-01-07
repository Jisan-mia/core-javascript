// two dimensional array
// A two dimensional array is an array that contains other arrays as elements. Programmers use multidimensional arrays when dealing with data that has many layers. It is also useful to represent a grid space.
//  const arr = [[1,2], [3,4,5], [6,7,8]]

// exercise-1: print2d
// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.
const arr = [
  [1,2],
  [3,4,5],
  [6,7,8]
]

function print2d(twoDArray) {
  let str = ''
  for(let i = 0; i < arr.length; i++) {
    const subArray = arr[i]
    for(let j = 0; j < subArray.length; j++) {
      str += arr[i][j]
    }
  }
  return str
}

console.log('2d array elements: ', print2d(arr));


// exercise-2: makeMatrix
// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

function makeMatrix(m,n,value) {
  const matrix = [];
  for(let i = 0; i < m; i++) {
    matrix.push([])
    for(let j = 0; j < n; j++) {
      matrix[i].push(value)
    }
  }
  return matrix
}

console.log(makeMatrix(4, 3, 'x'));



// exercise-3: totalProduct
// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

function totalProduct(array) {
  let product = 1;
  for(let i = 0; i < array.length; i++) {
    const subarray = array[i];

    for(let j = 0; j < subarray.length; j++) {
      product = product * array[i][j]
    }
  }
  return product
}

console.log(totalProduct([
  [3, 5, 2],
  [6, 2],
]));



// exercise-4: twoSumPairs
// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.


function twoSumPairs(number, target) {
  const resultArr = []
  for(let i = 0; i < number.length; i++) {

    for(let j = i+1; j < number.length; j++) {
      if((number[i] + number[j]) == target) {
        resultArr.push([number[i], number[j]])
      }
    }
  }
  return resultArr;
}

console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]



// exercise-4: zipper
// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the
// same length.


function zipper(arr1, arr2) {
  const resultArr = [];
  for(let i = 0; i < arr1.length; i++) {
    resultArr.push([arr1[i], arr2[i]])
  }
  return resultArr
}

let array1 = ["whisper", "talk", "shout"];
let array2 = ["quiet", "normal", "loud"];
console.log(zipper(array1, array2));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]
