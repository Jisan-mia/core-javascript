// in node module there is only one way to export code from one file to another
// is by using module.exports
 const me = {
    firstName: 'jisan',
    lastName: 'mia'
}

 const sakib = {
    firstName: 'sakib',
    lastName: 'hasan'
}

function printUser(user) {
    return user.firstName + ' ' + user.lastName;
}

// exporting codes in an object
module.exports = {
    me: me,
    sakib:sakib,
    printUser: printUser
}