// generators in javascript

// i. generator function
// ii. generator itself

// creating generator function
function* simpleGenerator() {
    console.log("before 1")
    yield 1
    console.log("after 1")
    console.log("before 2")
    yield 2
    console.log("after 2")
    console.log("before 3")
    yield 3
    console.log("after 3")
}

// creating generator itself by calling the above generator function
const generator = simpleGenerator();

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())


// implementation
console.log("====== Fibonacci Generator ======")
function* fibonacciGenerator() {
    let prevOne = 0
    let prevTwo = 1

    yield 0
    yield 1

    while(true) {
        const result = prevOne + prevTwo
        yield result
        prevOne = prevTwo
        prevTwo = result
    }
}

const fibonacci = fibonacciGenerator()
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())


// id generator
console.log('====== idGenerator generator ======')
function* idGenerator() {
    let count = 1;

    while(true) {
        // here incrementor is kind of parameter passed when we called the generator function
        const incrementor = yield count
        if(incrementor != null) {
            count += incrementor
        } else {
            count++
        }
    }
}
const generateId = idGenerator()
console.log(generateId.next())
console.log(generateId.next(5))
console.log(generateId.next())
console.log(generateId.next())

// by calling the generator function again it goes back in the beginning
const generateIdAgain = idGenerator();
console.log(generateIdAgain.next())


// .return() method of generator ends generator function from infinite loop
generateId.return()