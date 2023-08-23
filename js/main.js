const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minutesCount = document.getElementById("minutes");
const secondsCount = document.getElementById("seconds");

const goalDate = new Date(2023, 7, 24, 9, 30, 0, 0);
const goalMs = goalDate.getTime();

const msSec = 1000
const msMin = 60000
const msHour = 3600000
const msDay = 86400000


function check() {
    
    const msDiff = goalMs - (new Date().getTime())

    let nDays = Math.floor(msDiff / msDay) % 24
    let nSec = Math.floor(msDiff / msSec) % 60 
    let nMin = Math.floor(msDiff / msMin) % 60
    let nHr = Math.round(msDiff / msHour) % 60

    daysCount.innerHTML = nDays
    hoursCount.innerHTML = nHr
    minutesCount.innerHTML = nMin
    secondsCount.innerHTML = nSec

} 

setInterval(check,1000)
