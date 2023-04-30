// sets in javascript
// is an new type of array, set looks like array
// but sets are essentially array where all the items are guaranteed to be unique

const set = new Set([1, 2, 3, 4, 4]);

// add an item
set.add(5);

// delete an item
set.delete(3);

// size of th set
console.log(set.size);

// set.clear() method empties a set

console.log(set);

// implementation of sets

function removeDupsWithoutSet(arr) {
  let uniqueArr = [];
  arr.forEach((item) => {
    if (uniqueArr.indexOf(item) === -1) {
      uniqueArr.push(item);
    }
  });

  // another ways using reduce
  const uniqueArr2 = arr.reduce(
    (acc, currentVal) =>
      acc.indexOf(currentVal) === -1 ? [...acc, currentVal] : acc,
    []
  );

  return uniqueArr2;
}
console.log(removeDupsWithoutSet([1, 2, 3, 4, 5, 2, 3, 2, 2, 5]));

function removeDupsWithSet(arr) {
    return [...new Set(arr)]
}
console.log(removeDupsWithSet([1, 2, 3, 4, 5, 2, 3, 2, 2, 5]));
