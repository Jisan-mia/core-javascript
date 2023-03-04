// Event loop
// The event loop is a mechanism that allows JavaScript to perform non-blocking operations.

// browser or nodejs components
/*
- javascript engine which consists of 2 components
    i. heap -> for memory management
    ii. call stack -> code executions happens here
- web apis -> provided by browser and for nodejs there is c++ apis 
- event loop -> event loop pulls non-blocking asynchronous task from render queue, microtask queue, callback queue to the call stack and executes there
- note: event loop runs when the call stack is empty
- render queue -> elements that render on the website
- microtask queue -> javascript promise, async-await task
- callback queue -> setTimeOut, setInterval callbacks
*/

