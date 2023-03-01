// async await in javascript
const hasMeeting = true;

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
  const calenderDetail = `Meeting for ${meetingDetail.name} added on calender in ${meetingDetail.tool} at ${meetingDetail.time}`;
  return Promise.resolve(calenderDetail);
};

async function myMeeting() {
  try {
    const meetingDetail = await meeting;
    const calenderDetail = await addToCalender(meetingDetail);

    console.log(calenderDetail);
  } catch {
    console.log('something went wrong')
  }
}

myMeeting();
