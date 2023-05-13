const person = {
  name: 'John',
  hobbies: ['gardening', 'cricket']
}

// impure function
// since its making side effect outside of the function
function addHobbies(a, hobbyName ) {
  a.hobbies.push(hobbyName)
}

// pure function
function addPureHobbies(o, hobbyName) {
  return {
    ...o,
    hobbies: addElementToArr(o.hobbies, hobbyName)
  }
}

// another pure function that can be used into other functions
function addElementToArr(a, element) {
  return [...a, element]
}

console.log(addPureHobbies(person, 'fishing'))
console.log(person) // main object stayed unchanged