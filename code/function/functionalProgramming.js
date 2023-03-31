function mapForEach(arr, fn) {
    var newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }

    return newArr;
}

var myArr = [2, 4, 6]

var doubleIt = mapForEach(myArr, function(currentItem) {
    return currentItem * 2;
})
console.log(doubleIt) // [4,8,12]