// there might come a situation where we need to get result of multiple promises in one time
// in this scenario we can use Promise.all
// it takes promises in an array that should return in single time
// and returns resolved result in an array

const promise1 = Promise.resolve("Promise 1 resolved");

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))

Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});
