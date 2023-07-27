class Car {
  constructor(
    model,
    foundedYear,
    color,
    numberOfDoors,
    gasAmount,
    totalMilesDrive,
    speed
  ) {
    this.model = model;
    this.foundedYear = foundedYear;
    this.model = color || "black";
    this.numberOfDoors = numberOfDoors || 4;
    this.gasAmount = gasAmount || 100;
    this.totalMilesDrive = totalMilesDrive || 0;
    this.speed = speed || 0;
  }

  #speedUpInterval;

  accelerate() {
    this.#speedUpInterval = setInterval(() => {
      this.#incrementSpeed();
      console.log(this.speed);
      if (this.speed === 100) {
        console.log(this.break())
      };
    }, 500);
    return "Speeding up the car";
  }

  #incrementSpeed() {
    this.speed += 10;
  }

  break() {
    const currentSpeed = this.speed
    this.speed = 0;
    clearInterval(this.#speedUpInterval);
    return `Car stopped at speed of ${currentSpeed} km/h`;
  }

  turn(side) {
    return side === "right" ? this.#turnRight() : this.#turnLeft();
  }

  #turnRight() {
    return "Turning to Right!";
  }

  #turnLeft() {
    return "Turning to Left!";
  }
}

const tesla3 = new Car("Tesla Model 3", 2003, "Black", 4, 80, 2000, 0);
console.log(tesla3.accelerate());
console.log(tesla3.turn("right"));
