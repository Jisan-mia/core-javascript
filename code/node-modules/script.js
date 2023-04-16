// only one way to import code is by using 'require' function 
// the parameter will be the file location from where we are importing

const user = require('./user.js')

const {me, sakib, printUser} = user


console.log(printUser(me)) // jisan mia

console.log(printUser(sakib)) // sakib hasan

