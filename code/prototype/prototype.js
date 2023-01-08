// what is prototype
// prototype is a property for every function in javascript which points an object

function Car(name, founded) {
  const car = Object.create(Car.prototype)
  car.name = name;
  car.founded = founded

  return car
}

Car.prototype = {
  start: function () {
    console.log('Car has started')
  },
  break: function () {
    console.log('Break the car')
  },
  accelerate: function () {
    console.log('Car s accelerating')
  }
}

const car1 = Car('Lamborgini', '1995')
// console.log(car1.break())


// with new keyword
function CarWithNew(name, founded) {
  // const this = Object.create(this.prototype)
  this.name = name;
  this.founded = founded

  // return this
}
CarWithNew.prototype = {
  start: function () {
    console.log('Car has started')
  },
  break: function () {
    console.log('Break the car')
  },
  accelerate: function () {
    console.log('Car is accelerating')
  }
}

const newCar = new CarWithNew('Tesla', '2002')
// console.log(newCar.accelerate())


// same examples with class
class CarClass {
  constructor(name, founded) {
    this.name = name;
    this.founded = founded;
  }

  start() {
    console.log('Car has started')
  }
  break() {
    console.log('Break the car')
  }
  accelerate() {
    console.log('Car is accelerating')
  }
}
const anotherCar = new CarClass('Ferrari', 1895)
console.log(anotherCar.start())