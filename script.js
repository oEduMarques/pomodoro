const timerDisplay = document.getElementById('timer-display');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnMode = document.getElementById('btn-mode');
const btnPomodoro = document.getElementById('btn-pomodoro');
const btnShortBreak = document.getElementById('btn-short');
const btnLongBreak = document.getElementById('btn-long');

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

function switchMode(seconds){
    updateTimer();
    pauseTimer();
    timeLeft = seconds;
    updateTimer();
}

btnStart.addEventListener('click', () => {
    startTimer()
});

btnPause.addEventListener('click', () => {
    pauseTimer()
});

btnPomodoro.addEventListener('click', ()=> {
    switchMode(1500);
});

btnShortBreak.addEventListener('click', ()=> {
    switchMode(300);
});

btnLongBreak.addEventListener('click', ()=> {
    switchMode(900);
});