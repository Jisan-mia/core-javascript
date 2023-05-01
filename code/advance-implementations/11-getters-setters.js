// getters and setters in javascript object

const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ")
    }
}

// getting full name of getter
console.log(person.fullName)

// setting full name by setter
person.fullName = 'Tom Cruise'

console.log(person)

// implementation
const jane = {
    age: 21,
    get birthYear() {
        return new Date().getFullYear() - this.age
    }
}

console.log(jane.birthYear)