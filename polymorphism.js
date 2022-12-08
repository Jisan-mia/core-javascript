// Polymorphism
// when a child class/sub class/derived class that inherited a parent class and modify any method of it's parent class,
// then this modifying procedures called Polymorphism


class Car {
  // parent class
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
}

class ElectricCar extends Car {
  // sub class
  constructor(model, founded, battery, charger, hasAutopilot) {
    super(model, founded)
    this.model = model; 
    this.founded = founded;
    this.battery = battery;
    this.charger = charger;
    this.hasAutopilot = hasAutopilot;
  }

  startAutoPilot() { // method
    console.log(`${this.model} ${this.hasAutopilot ? 'is in' : "don't have"} autopilot mode`)
  }

  // changing parent method
  break() {
    super.break();
    console.log(`${this.model} just break polymorphismacally`)
  }
}

const tesla = new ElectricCar('Tesla 3', 2003, 'lithium-ion', 'tesla charger', true);
tesla.break()
// Tesla 3 just break
// Tesla 3 just break polymorphismacally