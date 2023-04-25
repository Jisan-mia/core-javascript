// array destructuring
const cars = ["Tesla", "Ferrari", "Ford", ["tesla 3", "tesla 4"]];

// normal way to get array items
const tesla1 = cars[0];
const ferrari1 = cars[1];
const [tesla, ferrari, ford, [tesla3, tesla4], primo = "primo"] = cars;
console.log({ tesla, ferrari, ford, tesla3, tesla4, primo });

// implementation-1
function addAndMultiply(a, b) {
  return [a + b, a * b];
}
const [sum, product] = addAndMultiply(2, 3);
console.log({ sum, product });



// implementation-2
function getFirstLastNameArr(name) {
  return name.split(' ')
}

console.log(getFirstLastNameArr('John Doe')) // [ 'John', 'Doe' ]