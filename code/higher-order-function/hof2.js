// higher order function

const celebrities = [
  {
    name: "Sakib",
    hobbies: ["gardening", "cricket"],
  },
  {
    name: "Tamim",
    hobbies: ["fishing", "cricket"],
  },
  {
    name: "Sakib",
    hobbies: ["gardening"],
  },
  {
    name: "Elong",
    hobbies: ["tweeting", "meeming"],
  },
];

const result = groupBy(celebrities, (celeb) => celeb.name) 
console.log(result)

function groupBy(array, func) {
    return array.reduce((grouping, currentElm) => {
      const key = func(currentElm)
      if(grouping[key] == null) grouping[key] = []
      grouping[key].push(currentElm)
      return grouping
    }, {})
}