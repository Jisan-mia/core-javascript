// three sum
/*
- write a function that takes an array of numbers and a target number
- find three item or triplet from the number array that sums is equal to the target number
- then return these triplet numbers product

*/


const numsArr = [1721, 979, 366, 299, 675, 1456]
const target = 2020

// 979 + 366 + 675 = 2022
// 979 * 366 * 675 = 241861950

// 3 level nested for loop

function threeSum1(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    let number1 = arr[i]

    for(let j = i+1; j < arr.length; j++) {
      let number2 = arr[j]

      for(let k = j+1; k < arr.length; k++) {
        let number3 = arr[k]
        if(number1+number2+number3 == target) {
          return number1*number2*number3
        }
      }
    }
  }
}

// console.log(threeSum1(numsArr, target))

// optimized way
function twoSum(arr, target) {
  let pairSums = {};

  for(let i = 0; i < arr.length; i++) {

    for(let j = i+i; j < arr.length; j++) {
      const number1 = arr[i];
      const number2 = arr[j]
      const sum = number1 + number2

      pairSums[sum] = [number1, number2]

    }
  }

  for(let num of arr) {
    const difference = target - num;
    if(difference in pairSums) {
      const [numB, numC] = pairSums[difference]

      return num * numB * numC

    }
  }

}

console.log(twoSum(numsArr, target));
