class MyArray {
  #elements;

  constructor(){
    this.#elements = []
  }

  addElement(element) {
    this.#elements.push(element)
  }

  getAllElements() {
    return [...this.#elements]
  }

  removeElement(element) {
    this.#elements = this.#elements.filter((elm => elm !== element))
  }

  modifyElement(element, newElement) {
    const index = this.#elements.indexOf(element)
    if(index !== -1) {
      this.#elements[index] = newElement
    }
  } 
}

const carNames = new MyArray()
carNames.addElement('tesla')
carNames.addElement('ferrari')
carNames.addElement('ford')
console.log(carNames.getAllElements())
carNames.removeElement('ferrari')
console.log(carNames.getAllElements());
carNames.modifyElement('ford', 'lamborghini')
console.log(carNames.getAllElements());

