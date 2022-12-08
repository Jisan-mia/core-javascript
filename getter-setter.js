// getter is nothing but we access getter as property but behaves like methods
// setter is same as getter we access it as property but behaves like methods
// but the difference is we can change any property of the object
// and we can't call setter
// we must use equal sign(=) and setter will take the value as parameter

class Car{
  constructor(model, founded) {
    this.model = model; // property
    this.founded = founded;
  }

  start() {  // method
    console.log(`${this.model} has started`)
  }


  get setModel() { // getter
    return `${this.model}`
  }

  set setModel(model) { // setter
    this.model = model
  }
}

const myCar = new Car('Ford', '1885');

// console.log(myCar.setModel)
myCar.setModel = 'Ferrari'

console.log(myCar.setModel) // Ferrari
