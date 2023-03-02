/*
The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

n! = n * (n - 1) * (n - 2) * ...*1
n! = n * (n-1)!
*/

function factorial(num) {
    if(num === 1) {
        return num;
    }
    return num * factorial(num-1)
}

console.log('5')
console.log(factorial(5))