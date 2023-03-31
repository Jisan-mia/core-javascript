function mapForEach(arr, fn) {
    var newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }

    return newArr;
}

var myArr = [1, 2, 3]

var doubleIt = mapForEach(myArr, function(currentItem) {
    return currentItem * 2;
})
console.log(doubleIt) // [2,4,6]


// 
var checkPastLimit = function(limiter, item) {
    return item > limiter;
}
var checkLimitation = mapForEach(myArr, checkPastLimit.bind(this, 1))
console.log(checkLimitation) // [ false, true, true ]


var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter
    }.bind(this, limiter)
}

var checkLimitationSimplified = mapForEach(myArr, checkPastLimitSimplified(2))
console.log(checkLimitationSimplified) //  [ false, false, true ]