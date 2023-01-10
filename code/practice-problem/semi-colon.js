// what do you thing that output will be?
function func1() {
  return {
    name: "Akarshan"
  };
}

function func2() {
  return
  {
    name: "Akarshan"
  };
}

console.log(func1()) // { name: 'Akarshan' }
console.log(func2()) //
// second one will return undefined
// because in javascript semi-colon are optional and js automatically insert a semicolon at the
// end of a line when needed. so in second function, the curly braces is added in the next line
// and javascript automatically added a semi-colon at the end of the return statement, thus
// the value returns is undefined.
