/*
The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....
*/

function fibonacci(n) {
    if(n <=1) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(8))