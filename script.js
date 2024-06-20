var ms = 0, s = 0, m = 0, h = 0;
var timer;
var display = document.querySelector('.timer-display');
var lapsContainer = document.querySelector('.laps');

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    display.innerHTML = getTimer();
    ms++;
    if (ms === 100) {
        ms = 0;
        s++;
    }
    if (s === 60) {
        s = 0;
        m++;
    }
    if (m === 60) {
        m = 0;
        h++;
    }
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + 
           (m < 10 ? "0" + m : m) + " : " + 
           (s < 10 ? "0" + s : s) + " : " + 
           (ms < 10 ? "0" + ms : ms);
}

function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = "00:00:00:00";
    lapsContainer.innerHTML = "";
}

function restart() {
    reset();
    start();
}

function lap() {
    if (timer) {
        const lapTime = getTimer();
        const lapElement = document.createElement('li');
        lapElement.textContent = lapTime;
        lapsContainer.appendChild(lapElement);
    }
}

function resetLap() {
    lapsContainer.innerHTML = "";
}

