const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minutesCount = document.getElementById("minutes");
const secondsCount = document.getElementById("seconds");

const todayDate = new Date();
const goalDate = new Date(2023, 7, 24, 9, 30, 0, 0);
const goalMs = goalDate.getTime();
