// function composition
// function composition at its core is combining multiple function into one function
const numbers = [1, 2, 3, 4, 5]

function double(num){
  return num*2
}

function addOne(num) {
  return num + 1
}

function doubleAndAddOne(num) {
  return addOne(double(num));
}

const result = numbers.map(doubleAndAddOne)
console.log(result)
