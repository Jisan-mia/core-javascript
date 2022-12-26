const numbers = [
  '452 1463   81',
  '94 07'
]

const counts = {}

for(let i = 0; i<numbers.length; i++) {
    for(let k = 0; k < numbers[i].length; k++) {
      if(numbers[i][k] !== ' ') {
        if(counts[numbers[i][k]] === undefined) {
          counts[numbers[i][k]] = 0
        }
        counts[numbers[i][k]]++
      }
    }
}

console.log(counts)
