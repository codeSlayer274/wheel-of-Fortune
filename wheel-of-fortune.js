const fullDegree = 360;
let addedDegree = Math.floor(Math.random() * fullDegree);
const numberOfLaps = 2;
let isStarted = false;
let sec;

function displayTime() {
    sec = document.getElementById("sec");
    addedDegree = Math.floor(Math.random() * fullDegree);
    let sRotation = 0;

    let intervalId = setInterval(function () {
        sRotation = sRotation + 2;
        sec.style.transform = `rotate(${sRotation}deg)`;
        if (sRotation >= fullDegree * numberOfLaps + addedDegree) {
            clearInterval(intervalId);
            isStarted = false;
        }
    }, 1)
}

function start() {
    if (isStarted === true) {
        return;
    }
    isStarted = true;
    displayTime();
}