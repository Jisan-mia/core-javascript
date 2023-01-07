// two dimensional array
// A two dimensional array is an array that contains other arrays as elements. Programmers use multidimensional arrays when dealing with data that has many layers. It is also useful to represent a grid space.
//  const arr = [[1,2], [3,4,5], [6,7,8]]

// exercise-1
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

