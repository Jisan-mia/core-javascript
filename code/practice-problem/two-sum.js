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
// set = {7, 8, 5, 9, }

// not optimized solution using 2 level nested for loop

function twoSum1(arr, target) {
  for(let i = 0; i< arr.length; i++) {
    let number1 = arr[i];

    for(let j = i+1; j < arr.length; j++) {
      let number2 = arr[j]

      if(number1 + number2 == target) {
        return number1 * number2
      }
    }
  }
}
console.log('2 nested for loop', twoSum1(numsArr, target))

function twoSum(arr, target) {
  let numberSet = new Set();

  for(let number of arr) {
    const diff = target - number
    if(numberSet.has(diff)) {
      return number * diff
    }

    numberSet.add(number)
  }
}
console.group(twoSum(numsArr, target))


