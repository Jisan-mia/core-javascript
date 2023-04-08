// curry converter function
function curryConverter(func) {
  return function curredFunc(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curredFunc.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curryConverter(sum);
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));
