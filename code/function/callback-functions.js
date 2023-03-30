// callback functions
// a function you give to another function, to be run when the other function is finished
// so the function you call(i.e. invoke), 'calls back' by calling the function you gave it when it finishes.

function processOrder(customerName, callback) {
  const processed = "Order processed for " + customerName;
  console.log(processed);
  callback(customerName);
}

function serveOrder(customerName, callback) {
  console.log("serve the order for " + customerName);

  callback(customerName);
}

function completeOrder(customerName) {
  console.log("Order completed for ", customerName);
}

processOrder("John", function (name) {
  serveOrder(name, function (name) {
    completeOrder(name);
  });
});
