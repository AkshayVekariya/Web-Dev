const outputCal = document.getElementById("output-cal");
const birthOfDate = document.getElementById("birth-date");

const month30s = [3, 5, 8, 10];
const month31s = [0, 2, 4, 6, 7, 9, 11];

function ageCalculator() {
  const today = new Date();
  const BOD = new Date(birthOfDate.value);

  const todaysYear = today.getFullYear();
  const BODYear = BOD.getFullYear();

  const todaysMonth = today.getMonth();
  const BODMonth = BOD.getMonth();

  const todaysDate = today.getDate();
  const bodDate = BOD.getDate();

  let diffDays = todaysDate - bodDate;
  let diffmonth = todaysMonth - BODMonth;
  let diffYear = todaysYear - BODYear;

  let year = diffYear;
  let month = diffmonth;
  let day = diffDays;

  let millSecond = today.getTime() - BOD.getTime();
  let second = Math.floor(millSecond / 1000);
  let minutes = Math.floor(second / 60);
  let hours = Math.floor(minutes / 60);
  let week = Math.floor(day / 7);
  let extraWeekDay = day % 7;

  if (diffmonth < 0) {
    year--;
    month = 12 + diffmonth;
  }

  if (diffDays < 0) {
    month--;
    let currentMonthDays;
    if (month30s.includes(todaysMonth)) {
      currentMonthDays = 30;
    } else if (month31s.includes(todaysMonth)) {
      currentMonthDays = 31;
    } else {
      if (todaysYear % 4 == 0) {
        currentMonthDays = 29;
      } else {
        currentMonthDays = 28;
      }
    }
    day = currentMonthDays + diffDays;
  }

  const totalMonths = 12 * year + month;
  const totalDays = Math.floor(hours / 24 + extraWeekDay);
  const totalWeek = Math.floor(totalDays / 7);

  outputCal.innerText = `${year} year ${month} month  ${day} day
   or ${totalMonths}month ${day} days
   or ${totalWeek} Weeks ${extraWeekDay} days
   or ${totalDays} Days
   or ${hours} hours
   or ${minutes} minutes
   or ${second} seconds`;
}
