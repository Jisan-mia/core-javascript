class Player {
  #name
  #age
  
  constructor(name, age) {
    this.#name = name
    this.#age = age
  }

  getPlayerDetails() {
    return `${this.#name} is ${this.#age} years old`
  }
}

class Cricketer extends Player {
  #totalRun;

  constructor(name, age, totalRun) {
    super(name, age);
    this.#totalRun = totalRun
  }
}

class Footballer extends Player {
  #totalGoals;
  #fieldPosition

  constructor(name, age, totalGoals, fieldPosition) {
    super(name, age)
    this.#totalGoals = totalGoals;
    this.#fieldPosition = fieldPosition
  }
}

const tamim = new Cricketer('Tamim', 39, 3000)

const cr7 = new Footballer('Cristiano Ronaldo', 38, 1100, 'Forward')

console.log(tamim.getPlayerDetails())
console.log(cr7.getPlayerDetails())