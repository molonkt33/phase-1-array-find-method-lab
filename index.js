// index.js

// Function to find the year Denver Broncos won the Super Bowl
function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  