// a simple nodejs based atm like project in cli
// todos
// 1. ask for account
// 2. if account does not exist, ask to create account
// 3. ask what user want
// 4. execute command 
    // i. view
    // ii. withdraw
    // iii. deposit

// Account class
const Account = require('./Account.js')
const CommandLine= require('./CommandLine.js')

CommandLine.ask('Whats your account name?').then(answer => {
    Account.find(answer)
    CommandLine.print(answer)
})