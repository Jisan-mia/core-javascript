// maps in javascript
// creating new map
const map = new Map([
  [1, "A"],
  [2, "B"],
  [3, "C"],
  [4, "D"],
]);

// size of the map
console.log(map.size);

// get a value
console.log(map.get(1)); // 'A'

// set a new entry with key/value
map.set(5, "E");

// check if a key has any value
// map.has() method returns true or false
console.log(map.has(6)); // false

// delete an entry from map
map.delete(1);

// map.clear() clears out the map and returns empty map

// loop over map
map.forEach((value, key) => {
  console.log(value, key);
});

console.log(map);

// implementation
const userMap = new Map([
  [1, { name: "john", age: 22 }],
  [2, { name: "robin", age: 28 }],
  [3, { name: "jack", age: 25 }],
]);
console.log(userMap);

function getUserById(id) {
  return userMap.get(id);
}
console.log(getUserById(2));
