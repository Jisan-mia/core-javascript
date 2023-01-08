// Prototype Inheritance
// when we want to create a subclass of another class in prototype way
// so that the subclass(child) can inherit another class(parent) attributes/characteristic or features into it

// inheritance in prototype way in 3 steps
// i. we should inherit the prototype by assigning Object.create(ParentClass.prototype) this onto child function prototype
// ii. we should pass the child this to the parent as the reference of parent this explicitly by ParentClass.call(this)
// iii. since we're overriding the child constructor Function with `Parent.call(this)`(because by default in js constructor don't have `Parent.call(this)` in ints prototype)

//parent class
function Car(model, founded) {
  this.model = model;
  this.founded = founded;
}


// subclass
function ElectricCar(model, founded, battery, charger, hasAutopilot) {
  Car.call(this) // 2nd step
  this.model = model;
  this.founded = founded;
  this.battery = battery;
  this.charger = charger;
  this.hasAutopilot = hasAutopilot;
}

Car.prototype = {
  start: function() {
    console.log(`${this.model} has started`)
  },
  break: function() {
    console.log(`${this.model} just break`)
  },
  accelerate: function() {
    console.log(`${this.model} is accelerating`)
  }
}

ElectricCar.prototype = Object.create(Car.prototype) // 1st step
ElectricCar.prototype.constructor = ElectricCar // 3rd step
ElectricCar.prototype.startAutoPilot = function(){
  console.log(`${this.model} is in autopilot mode`)
}

const myCar = new Car('Ferrari', 1895);
// console.log(myCar.start())

const tesla = new ElectricCar('Tesla Model 3', 2022, 'Tesla Powerwall', 'Tesla SuperCharger', true)
console.log(tesla.startAutoPilot()) //Tesla Model 3 is in autopilot mode