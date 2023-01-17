// Operators
// Operator is a special function that is syntactically(written) differently. Generally operators take two parameters and return one result

// addition operator example
var a = 5+7
console.log(a)

// Operator Precedence:
// means which operator function gets called first. functions are called in order of precedence. higher precedence wins.
// so, if i have more than on operator operators in one line, the javascript engine will call or invoke the operator with the higher precedence first to the highest and then down the line form there

// here is the link of mdn of precedence and associativity ->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// examples
var b = 3 + 4 * 5
console.log(b) // 23
/*
- here multiplication operator(*) invokes first instead of addition operator(+)
- because of higher precedence, * has higher precedence of 14 and + operator has 13 precedence
- thats why  4 * 5 called first and returns 20
- then 3 + 20 returns 23
*/

var c = (3 + 4) * 5
console.log(c); // 35
/*
- now why 35 and not 23
- because of precedence
- groping operator (), has the highest precedence of 19 thats why it's called first and do what inside of () operator first
- so (3+4) returns 7
- and 7 * 5 returns 35
*/



// Associativity
// what order operator function get called in: left-to-right(left associativity) or right-to-left(right associativity) when the operator function have the same precedence



