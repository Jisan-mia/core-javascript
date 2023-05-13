// immutability means that something cannot be mutate or changed like a constant
const PI = 3.1416
// we cant mutate/change PI value, since it's a constant

// different for object and arrays
// we can mutate a constant object/array properties
// to add immutability in object/array we can use Object.freeze(obj)
// but this method only freezes mutability for one level
// to solve this we can make our own deepFreeze function
// which will add immutability for deep level object/array

const person = deepFreeze({
  name: 'Jake',
  hobbies: ['gardening', 'fishing'],
  address: {
    street: '121b street',
    city: 'Dhaka'
  }
})

// person.hobbies.push('writing') // returns error
console.log(person)

function deepFreeze(object) {
  Object.values(object).forEach(value => {
    if(value && typeof value === 'object') {
      deepFreeze(value)
    }
  })

  return Object.freeze(object)
}

