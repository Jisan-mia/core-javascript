// two sum
/*
- write a function that takes an array of numbers and a target number
- find two item from the number array that sums is equal to the target number
- then return these two number product

*/

const numsArr = [7, 8, 5, 9, 2, 12]
const target = 10
// 8+2 = 10
// should return 8*2 =
// set = {3, 2, 5, 1, 8}

function twoSum(arr, target) {
  let numberSet = new Set();

  for(let number in arr) {
    const diff = target - number
    if(numberSet.has(diff)) {
      return number * diff
    }

    numberSet.add(number)
  }
}
console.group(twoSum(numsArr, target))

