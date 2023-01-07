// two dimensional array
// A two dimensional array is an array that contains other arrays as elements. Programmers use multidimensional arrays when dealing with data that has many layers. It is also useful to represent a grid space.
//  const arr = [[1,2], [3,4,5], [6,7,8]]

// exercise-1: print2d
// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.
const arr = [[1,2], [3,4,5], [6,7,8]]

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


// exercise-1: makeMatrix
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
