// recursion in javascript
/*
- when a function call itself, in its body, this event called recursion
*/

// summation of 1 to nth number
// 1 + 2 + 3 + .... + n

// for loop example
/*
const n = 3;
let total = 0;
for(let i = 1; i<=n; i++) {
    total+=i;
}
console.log(total) // 6

// functional thinking
0+1 = 1
1+2 = 3
3+3 = 6

last total + currentValue = currentTotal
f(n-1)        +   n            = f(n)

*/

function sum(n) {
  if (n === 0) {
    return 0;
  }
  return sum(n - 1) + n;
}

console.log(sum(10))

// more efficient way
const n = 100000
console.log((n*(n-1))/2)