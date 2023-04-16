// 2 ways we can import code from another file
// named import, default import

// import code which has exported as named export
// when we import named exported code, we import by the same name as exported
// inside curly{} braces
import { me, sakib } from './user.js'

// import default exported code
// we can import default exported code(function/variables) in any name
import printUserInfo from './user.js'


console.log(printUserInfo(me)) // jisan mia

console.log(printUserInfo(sakib)) // sakib hasan

console.log('hi console')
