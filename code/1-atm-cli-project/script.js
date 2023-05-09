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

async function main() {
    const accountName = await CommandLine.ask('What is your account name?')
    let account = await Account.find(accountName)

    if(account == null) {
        account = await promptCreateAccount(accountName)
    }

    if(account != null) {
        await promptWhatUserWant(account)
    }
}

async function promptCreateAccount(accountName) {
    const res = await CommandLine.ask("That account doesn't exist. Would you like to create it? (yes/no)")   
    
    if(res === 'yes') {
        return await Account.create(accountName)
    } 
}


async function promptWhatUserWant(account) {
    const res = await CommandLine.ask("What'd you like to do? (view/deposit/withdraw)");

    if(res === 'deposit') {
        const amount = parseFloat(await CommandLine.ask('How much?'))
        await account.deposit(amount)
        CommandLine.print(`Your new balance is: ${account.balance}`)
    }

    else if(res === 'withdraw') {
        const amount = parseFloat(await CommandLine.ask('How much?'))
        await account.withdraw(amount)
        CommandLine.print(`Your new balance is: ${account.balance}`)
    }

    else if(res === 'view') {
        CommandLine.print(`Your account name: ${account.name} \nYour account balance: ${account.balance}`)
    }


} 

main()