// comparison operator

console.log(1 < 2 < 3) // true

console.log(3 < 2 < 1); // true
/*
- from the human perspective 3 < 2 < 1 should be false because we know 3 is not less than 2 and 2 is not less than 1
- but javascript engine do the calculation differently in its way of doing
- so there is more than one < operator in one line
- and the associativity of < operator is left-to-right or left associativity
- means the furthest operator to the left will be called first
- Steps
  i. 3 < 2 will return false since 2 is not getter than 3
  ii. false < 1 will return true because of coercion
  iii. the javascript engine will coerce false to number and the coerced number value of false is 0. so < operator will compare 0 < 2 and which is true, hence return true
*/


// weird examples of comparison operator

// coercing means converting value from one type to another type of value

// lets convert values to number type
console.log(Number('5')); // 5
console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number('')); // 0
console.log(Number(undefined)) // NaN
console.log(Number(null)); // 0

// double equals or equality operator ==
// the equality operator checks if both value is same or equal, if so returns true, rather false
// also it coerce value when needed or when one of operator parameter is different type of value
console.log(3 == 3); // true
console.log('3' == 3); // true
console.log(false == 0); // true
console.log(null == 0); // false (doesn't coerce null here)
console.log(null < 1); // true
console.log("" == 0); // true

// we can solve the coercion happening when checking using equality operator by strict equality operator or triple equals operator ===
// it is recommended to use strick equality operator by default
// it not only compare the values but also the type
// and when the value and the type of both parameter of === operator is same/equal, it returns true otherwise false

console.log('3' === 3); // false
console.log(false === 0); // false

// also there is strict Inequality operator !==
// when the value and the type not equal or same returns true rather false
console.log('' !== false); // true
