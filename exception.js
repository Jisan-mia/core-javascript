function addTwoNum(x, y) {
  if(Number(x) !== x) {
    throw {
      name: 'TypeError',
      message: 'First Argument is not a number'
    }
  }
  if(Number(y) !== y) {
    throw {
      name: 'TypeError',
      message: 'Second Argument is not a number'
    }
  }
  return x+y;
}

const arr = [
  [2, 3],
  ['two', 3],
  [2, 'three'],
  [7, 9]
]

let res;
for(let item of arr) {
  try{
    res = addTwoNum(item[0], item[1])
  } catch(e) {
    console.log(e)
  }
}
