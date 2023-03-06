// Promise
// javascript promise which is self-explanatory. it promises to resolve or reject something based on conditions
// Promise takes a function as parameter
// and the parameter takes 2 functions as parameter
// i) resolve -> to successfully resolve a promise
// ii) reject -> to reject/fail a promise

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetail = {
      name: "Technical Discussion",
      tool: "Google Meet",
      time: "11:00 AM",
    };
    resolve(meetingDetail);
  } else {
    reject(new Error("Already meeting scheduled"));
  }
});

const addToCalender = (meetingDetail) => {
  //   return new Promise((resolve) => {
  //     const calenderDetail = `Meeting for ${meetingDetail.name} added on calender in ${meetingDetail.tool} at ${meetingDetail.time}`;
  //     resolve(calenderDetail);
  //   });
  const calenderDetail = `Meeting for ${meetingDetail.name} added on calender in ${meetingDetail.tool} at ${meetingDetail.time}`;
  return Promise.resolve(calenderDetail);
};

// promise chaining
meeting
  .then(addToCalender)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
