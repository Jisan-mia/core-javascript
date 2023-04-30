// rest operator
// rest operator works inside of a function parameter
// rest operator coverts all the remaining parameter into an array and assigns to the variable 


function sum(multiplier, ...numbers) {
    return multiplier * numbers.reduce((acc, currentNum) => acc + currentNum, 0)
}

console.log(sum(10,4, 6))