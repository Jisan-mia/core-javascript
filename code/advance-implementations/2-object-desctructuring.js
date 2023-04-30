
// object destructuring
console.log("===== object destructuring =====");

const person = {
  name: "John",
  age: 25,
  address: {
    street: "124b street c",
    city: "California",
  },
};

const {
  name: myFirstName,
  age,
  address: { street, city, zipCode = "1820" },
} = person;
console.log({ myFirstName, age, street, city, zipCode });


// implementation-1
function getDividerAndReminder(a, b) {
    return {
        division: a/b,
        reminder: a%b
    }
}

const { division, reminder } = getDividerAndReminder(12, 3)

console.log(division, reminder) // 4 0

// implementation-2
function getFirstLastNameObj(name) {
    const [firstName, lastName] = name.split(' ');
    return {
        firstName: firstName,
        lastName: lastName
    }
}
const {firstName, lastName} = getFirstLastNameObj('John Doe')
console.log({firstName, lastName})


// implementation-3 - destructuring in function arguments
function getFullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}
const fullName = getFullName({firstName: 'John', lastName: 'Doe'})
console.log(fullName)