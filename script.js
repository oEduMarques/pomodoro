let timerDisplay = document.getElementById('timer-display');
let btnStart = document.getElementById('btn-start');
let btnPause = document.getElementById('btn-pause');
let btnReset = document.getElementById('btn-reset');
let btnMode = document.getElementById('btn-mode');

let timeLeft = 1500;
let timerId = null;

function updateTimer(){
    let timerMinutes = Math.floor(timeLeft / 60);
    let timerSeconds = timeLeft % 60;

    let minutesStr = String(timerMinutes).padStart(2, '0');
    let secondsStr = String(timerSeconds).padStart(2, '0');

    let timeFormatted = `${minutesStr}:${secondsStr}`;

    timerDisplay.textContent = timeFormatted;
}

function startTimer() {
    if (timerId !== null) return;

    timerId = setInterval(() => {
        timeLeft--;
        updateTimer();
        console.log(timerId);

        if (timeLeft === 0) {
            clearInterval(timerId);
            timerId = null;
            alert("Tempo esgotado!");
        }
    }, 1000)
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 1500;
    updateTimer();
}

btnStart.addEventListener('click', () => {
    startTimer()
});

btnPause.addEventListener('click', () => {
    pauseTimer()
});

btnReset.addEventListener('click', () => {
    resetTimer()
});