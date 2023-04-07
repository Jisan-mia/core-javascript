// async await in javascript
/*
- there is way to improve handling asynchronous task even further
- by using async/await keywords introduced in ES2017(ES8)
- the async await keywords allow us to write completely synchronous looking 
- code while performing asynchronous tasks behind the scenes.
*/

/* async
- the async keyword is used to declare async functions
- async functions are functions that are instances of the AsyncFunction constructor
- Unlike normal functions, async functions always return a promise
*/

// normal function
function normalFunc() {
  return 'hello'
}
console.log(normalFunc()) // hello


// async function which returns promise
async function asyncFunc() {
  return 'world'
}
asyncFunc()
  .then((result) => console.log(result))


/* await
- await keyword can be put infront of any async promise based function to pause 
- the code until that promise settles and returns it's results
- await only works inside async functions. cannot use await in normal functions
*/

async function greet(){
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello world!'), 1000)
  })

  let result = await promise; // wait until the promise resolves

  console.log(result) // Hello world!
}
greet();