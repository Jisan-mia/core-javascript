// achieving encapsulation in closure functions
// we can get private data of outer function from inner function
function createPerson() {
  let name = 'John'

  return {
    getName: function() {
      return name;
    },
    setName: function(value) {
      name = value;
    }
  }
}

const johnPerson = createPerson();

// this code won't effect anything
johnPerson.name = "new name";

johnPerson.setName('John Doe')
console.log(johnPerson.getName()); // "John Doe"
