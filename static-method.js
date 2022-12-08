// static method in class
// static method don't have any relation with the object being instantiated using this class
// static method are internal method that are only accessible direct to the Class
// the class whe static method is created can only access this method
// like className.methodName()
// `this` keyword inside static method don't refers to any object rather it refers the class itself

class Car{
  constructor(model, founded) {
    this.model = model;
    this.founded = founded
  }

  start() {
    console.log(`${this.model} has started`)
  }

  static hasFoundedSameYear(car1, car2) {
    return car1.founded == car2.founded
  }

}

const tesla = new Car('Tesla', 2003);
const ferrari = new Car('Ferrari', 1947);

console.log(Car.hasFoundedSameYear(tesla, ferrari)) // false