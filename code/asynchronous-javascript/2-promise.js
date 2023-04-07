// Promise

/* What is Promise
- a promise is simple an object in javascript
- javascript promise which is self-explanatory. it promises to resolve or reject something based on conditions
- A promise is always in one of the three states
  - pending: which is initial state, neither fulfilled nor rejected
  - fulfilled: meaning that the operation completed successfully
  - rejected: meaning that the operation failed
*/

/* Why is Promise
- Promise help us deal with asynchronous code in far more simpler way compared to callbacks
- callback hell can be avoided with Promises
*/

/* How to work with Promises
Question arises when talking about how to work ith promises
  1. How to create a Promise?
  2. How to fulfill or reject the Promise?
  3. How to execute callback functions based on whether the Promise is fulfilled or rejected?
*/

/*
- Promise takes a function as parameter
- and the parameter takes 2 functions as parameter
- i) resolve -> changes status of promise from 'pending' to 'fulfilled' or to successfully resolve a promise
- ii) reject -> changes status of promise from 'pending' to 'rejected' or to reject/fail a promise
*/
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      //changes status of promise from 'pending' to 'fulfilled'
      resolve("promise successfully fulfilled");
    } else {
      // changes status of promise from 'pending' to 'rejected'
      reject("promise rejected");
    }
  }, 1000);
});



myPromise
  .then(onFulfillment)
  .catch(onRejected)


// success and failure callbacks
function onFulfillment(result) {
  console.log(result);
}
function onRejected(err) {
  console.log(err);
}
