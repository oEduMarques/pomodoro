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

btnStart.addEventListener('click', () => {
    updateTimer()
})