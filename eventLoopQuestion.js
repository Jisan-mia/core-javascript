console.log("1")

setTimeout(function() {
 console.log("2")
}, 0)

console.log("3")
/*
The output is not 1,2,3 but is rather 1,3,2.

This question is based on how our browsers handle asynchronous and synchronous operations.

Normally, the synchronous functions are executed in the event loop of the browser. But anytime, the browser encounters an asynchronous function, it is added to the call stack. The call stack waits until it can push the function to the event loop to be executed. This only happens once the event loop is empty.

In our case, even though the setTimeout is set to 0, the function is asynchronous in nature and thus, is added to the call stack. The event loop is not empty until it prints “3”. Only after that, does the call stack push the function in the event loop and **“2” **is printed.

*/
