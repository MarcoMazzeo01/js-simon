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
    console.log(msDiff)

    daysCount.innerHTML = Math.round(msDiff / msDay)
    hoursCount.innerHTML = Math.round(msDiff / msHour)
    minutesCount.innerHTML = Math.round((msDiff / msMin)) 
    secondsCount.innerHTML = Math.round((msDiff / msSec)) 


    setTimeout(check,1000)
}

check()

