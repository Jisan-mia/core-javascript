// Asynchronous JavaScript
// runs multiple code at a time
/*
- By nature, JavaScript can only run one operation at a time, it can't run multiple operation at a time
- for this, javascript is called single-threaded language

*/

// example of an synchronous code block
/*
const processOrder = (customer) => {
    console.log('processing order for customer 1');
    var currentTime = new Date().getTime();
    while(currentTime + 3000 >= new Date().getTime() );

    console.log('order processed for customer 1')
}
console.log('take order for customer 1');
processOrder();
console.log('completed order for customer 1')
*/

// example of asynchronous code block
/*
const processOrder1 = (customer) => {
  console.log("processing order for customer 1");
  setTimeout(() => {
    console.log("cooking completed");
  }, 3000);

  console.log("order processed for customer 1");
};
console.log("take order for customer 1");
processOrder1();
console.log("completed order for customer 1");
*/

// control the code flow using callback
const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`);
  callback(customer)
};

const processOrderMain = (customer, callback) => {
  console.log(`processing order for ${customer}`);

  setTimeout(() => {
    console.log("cooking completed");
    console.log(`order processed for ${customer}`);
    callback(customer)
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

takeOrder('customer 1', (customer) => {
  processOrderMain(customer, (customer) => {
    completeOrder(customer)
  })
})
