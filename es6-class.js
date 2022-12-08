class Car {
  //parent class
  constructor(model, founded) {
    this.model = model;
    this.founded = founded;
  }
  start() {
    console.log(`${this.model} has started`)
  }
  break() {
    console.log(`${this.model} just break`)
  }
  accelerate() {
    console.log(`${this.model} is accelerating`)
  }
}

class ElectricCar extends Car{
  //subclass
  constructor(model, founded, battery, charger, hasAutopilot) {
    super(model, founded)
    this.model = model;
    this.founded = founded;
    this.battery = battery;
    this.charger = charger;
    this.hasAutopilot = hasAutopilot;
  }

  startAutoPilot() {
    console.log(`${this.model} is in autopilot mode`)
  }
}

const myCar = new Car('Ferrari', 1895);
// console.log(myCar.startAutoPilot()) // error

const tesla = new ElectricCar('Tesla Model 3', 2022, 'Tesla Powerwall', 'Tesla SuperCharger', true)
console.log(tesla.start())