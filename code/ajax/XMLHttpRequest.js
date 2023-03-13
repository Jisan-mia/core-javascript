// XMLHttpRequest
// XML(Extensible Markup Language) is a data format or structure to exchange data or communicating with api in this format
// thought nowadays most of the time we use JSON(JavaScript Object Notation) data format to communicate with api
// browser runtime provides XMLHttpRequest

const sendRequest = function (method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // preparing the request
    xhr.open(method, url);

    // setting response data type and request headers
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-type", "application/json");

    // sending request to the url
    xhr.send(data);

    // when we get the response do something with the response data
    xhr.onload = function () {
      // error handling in xhr when there is application specific error
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
          resolve(xhr.response);
      }
    };

    // error handling in xhr when there is network specific error on my maching
    xhr.onerror = function () {
      reject("Something went wrong!");
    };
  });
  return promise;
};

const getData = function () {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
    (data) => console.log(data)
  ).catch(err => {
    console.log(err)
  })
};

const sendData = function () {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/post",
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getBtn = document.getElementById("get-btn");
const sendBtn = document.getElementById("send-btn");

getBtn.addEventListener("click", getData);
sendBtn.addEventListener("click", sendData);
