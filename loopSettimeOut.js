const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   function log() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }
//   console.dir(log)
//   setTimeout(log, 1000);
// }

// we wont get expected result because of using var which is in global scope and in every iteration
// i variable pointing the same i
// thats why i has the value of 4

// solution can be done using iffe
for (var i = 0; i < arr.length; i++) {
  setTimeout((function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  })(i), 3000);
}

// also using let
for (let i = 0; i < arr.length; i++) {
  function log() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }
  setTimeout(log, 1000)
}

