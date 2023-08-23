const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minutesCount = document.getElementById("minutes");
const secondsCount = document.getElementById("seconds");

const timeLabels = document.querySelectorAll(".counter-block-label")
const numLabels = document.querySelectorAll(".counter-block-number")

const goalDate = new Date(2023, 7, 24, 9, 30, 0, 0);
//const goalDate = new Date(2023, 7, 23, 17, 33, 40, 0); //test!!
const goalMs = goalDate.getTime();

const msSec = 1000
const msMin = 60000
const msHour = 3600000
const msDay = 86400000


//se la differenza è minore o uguale a zero, il conto alla rovescia è finito
const isOver = (msDiff) => {
    return (msDiff <= 0) ? true : false
}


function check() {
    
    const msDiff = goalMs - (new Date().getTime())
    console.log(msDiff)

    let nDays = Math.floor(msDiff / msDay) % 24
    let nHr = Math.round(msDiff / msHour) % 60
    let nMin = Math.floor(msDiff / msMin) % 60
    let nSec = Math.floor(msDiff / msSec) % 60 

    if (!isOver(msDiff)) {
        daysCount.innerHTML = nDays
        hoursCount.innerHTML = nHr
        minutesCount.innerHTML = nMin
        secondsCount.innerHTML = nSec
    } else {
        clearInterval(loop) //ferma il loop

        numLabels.forEach(label =>{
            label.classList.add("text-danger")
        })

        timeLabels.forEach(label => {
            label.style.color = "red"; 
        })
    }
    

} 

let loop = setInterval(check,msSec)
