// classic closure examples
var builderFunction = function() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        arr.push(function() {
            console.log(i)
        })
    }
    
    return arr;
}

var fnLists = builderFunction();

fnLists[0]() // 3
fnLists[1]() // 3
fnLists[2]() // 3
