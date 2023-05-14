const animals = [...document.querySelectorAll(".mammal-value")]

const onlyMammals = document.querySelector("#only-mammals");

const mammals = animals.filter(animal => animal.textContent === 'true')

mammals.forEach(mammal => {
  const grandParent = mammal.parentElement.parentElement

  onlyMammals.appendChild(grandParent)
})