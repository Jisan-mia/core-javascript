// XMLHttpRequest
// XML(Extensible Markup Language) is a data format or structure to exchange data or communicating with api in this format
// thought nowadays most of the time we use JSON(JavaScript Object Notation) data format to communicate with api
// browser runtime provides XMLHttpRequest

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
  responseArea.innerHTML = "Request on progress...";
  const randid = randomIntFromInterval(1, 100);
  sendRequest("GET", `https://jsonplaceholder.typicode.com/posts/${randid}`)
    .then((post) => {
      title.value = post.title;
      body.value = post.body;
      responseArea.innerHTML = `
                <div class='post'>
                    <p> <mark>${post.id} </mark> </>
                    <p>Title: ${post.title}</p>
                    <p>Body: ${post.body}</p>
                </div>
                <br />
                `;
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendData = function (e) {
  if (!title.value || !body.value) {
    return;
  }
  e.preventDefault();
  responseArea.innerHTML = "Request on progress...";

  const dataObj = {
    title: title.value,
    body: body.value,
    userId: 1,
  };
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify(dataObj)
  )
    .then((data) => {
      responseArea.classList.add("success");

      responseArea.innerHTML = "Successfully Post Added";
    })
    .catch((err) => {
      responseArea.classList.add("error");
      responseArea.innerHTML = `Error: ${JSON.stringify(err)}`;
    });
};

const editData = function (e) {
  if (!title.value || !body.value) {
    return;
  }
  e.preventDefault();
  responseArea.innerHTML = "Request on progress...";

  const dataObj = {
    title: title.value,
    body: body.value,
    userId: 1,
    id: 1,
  };
  sendRequest(
    "PUT",
    "https://jsonplaceholder.typicode.com/posts/1",
    JSON.stringify(dataObj)
  )
    .then((data) => {
      responseArea.classList.add("success");
      responseArea.innerHTML = "Successfully Post Edited";
    })
    .catch((err) => {
      responseArea.classList.add("error");
      responseArea.innerHTML = `Error: ${JSON.stringify(err)}`;
    });
};

const deleteData = function (e) {
  if (!title.value || !body.value) {
    return;
  }
  e.preventDefault();
  responseArea.innerHTML = "Request on progress...";

  sendRequest(
    "DELETE",
    `https://jsonplaceholder.typicode.com/posts/${randomIntFromInterval(
      1,
      100
    )}`
  )
    .then((res) => {
      title.value = "";
      body.value = "";
      responseArea.classList.add("success");
      responseArea.innerHTML = "Successfully Post Deleted";
    })
    .catch((err) => {
      responseArea.classList.add("error");
      responseArea.innerHTML = `Error: ${JSON.stringify(err)}`;
    });
};

const getDataList = function () {
  responseArea.innerHTML = "Request on progress...";

  sendRequest("GET", "https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      responseArea.innerHTML = "";

      data.forEach((post) => {
        responseArea.innerHTML += `
                <div class='post'>
                    <p> <mark>${post.id} </mark> </>
                    <p>Title: ${post.title}</p>
                    <p>Body: ${post.body}</p>
                </div>
                <br />
                `;
      });
    })
    .catch((err) => {
      responseArea.classList.add("error");
      responseArea.innerHTML = JSON.stringify(err);
    });
};

const getBtn = document.getElementById("get-btn");
const sendBtn = document.getElementById("send-btn");
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");
const getAllBtn = document.getElementById("get-list-btn");

const responseArea = document.getElementById("responseArea");

const title = document.getElementById("title");
const body = document.getElementById("body");

getBtn.addEventListener("click", getData);
sendBtn.addEventListener("click", sendData);
editBtn.addEventListener("click", editData);
deleteBtn.addEventListener("click", deleteData);
getAllBtn.addEventListener("click", getDataList);
