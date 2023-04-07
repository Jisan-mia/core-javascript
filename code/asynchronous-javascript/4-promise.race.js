// Promise.race is almost same as Promise.all the difference is:
// if we want to get the fastest one resolved result from an array of Promises
// we use Promise.race
// it returns the the single promise which resolves fast

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
