// Function vs variable hoisting.
function func() {
  abc = "Variable";
  function abc() {
    return("Function")
  }
  return abc();
}
console.log(func());

// this is what it looks after hoisting
function funcHoisting() {
  function abc() {
    return("Function")
  }
  abc = "Variable";
  return abc();
}
