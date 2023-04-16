// es6 modules
// we can export javascript code from one file to another by exporting
// and import from the another file

// 2 ways we can export code
// i. named export
// ii. default export

// named export is just, using the export keyword in front of the code
export const me = {
    firstName: 'jisan',
    lastName: 'mia'
}

export const sakib = {
    firstName: 'sakib',
    lastName: 'hasan'
}

function printUser(user) {
    return user.firstName + ' ' + user.lastName;
}
// default export
export default printUser;