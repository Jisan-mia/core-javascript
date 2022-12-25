// Closures practices
var sum = function () {
  var num1 = 5;
  var num2 = 10;
  return function() {
    return num1 + num2;
  };
}

var myFunc = sum();
myFunc()


// asynchronous example
for(var i=0; i<3; i++) {
  const myFunc = () => {
    console.log(i) // prints 3 for 3 times
  }

  console.log(i)
  console.dir(myFunc)
  setTimeout(myFunc, 3000);
}

