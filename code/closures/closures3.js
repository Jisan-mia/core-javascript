// classic closure examples
function builderFunction() {
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

// solving the above issue of logging 3 for each function with iife and closures
function builderFunction2() {
    var arr = []

    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j)
                }
            }(i))
        )
    }

    return arr;
}
var fnLists2 = builderFunction2();
fnLists2[0]() // 0
fnLists2[1]() // 1
fnLists2[2]() // 2

// lets try using the modern es6 javascript let
function builderFunction3() {
    var arr = [];

    for(var i = 0; i < 3; i++) {
        let j = i;
        arr.push(function() {
            console.log(j)
        })
    }

    return arr;
}
var fnLists3 = builderFunction3();
fnLists3[0]() // 0
fnLists3[1]() // 1
fnLists3[2]() // 2