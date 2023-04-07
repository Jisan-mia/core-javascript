
// example of promise
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
