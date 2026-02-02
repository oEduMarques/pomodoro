const timerDisplay = document.getElementById('timer-display');
const btnStart = document.getElementById('btn-start');
const btnControlTimer = document.getElementById('btn-control-timer');
const btnMode = document.getElementById('btn-mode');
const btnPomodoro = document.getElementById('btn-pomodoro');
const btnShortBreak = document.getElementById('btn-short');
const btnLongBreak = document.getElementById('btn-long');
let currentModeTime = 1500;
const messages = {
    1500: "Focus session complete! Time for a short break. ☕",
    300: "Short break is over! Ready to get back to work? 💪",
    900: "Long break finished! Time to crush your goals! 🚀"
};

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

        if(timeLeft <= 0) {
            clearInterval(timerId)
            timerId = null;
            return;
        }

        timeLeft--;
        updateTimer();
        
        if (timeLeft === 0) {
            clearInterval(timerId);
            timerId = null;
            btnControlTimer.textContent = "Start";
            const msg = messages[currentModeTime] || "Time is up!";
            alert(msg);
            window.dispatchEvent(new Event('stopAllSounds'));
        }
    }, 1)
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function controlTimer() {
    if (timerId === null) {
        startTimer();
        btnControlTimer.textContent = "Pause";
    } else {
        pauseTimer();
        btnControlTimer.textContent = "Start";
    }
}

function switchMode(seconds){
    pauseTimer();
    currentModeTime = seconds;
    timeLeft = seconds;
    updateTimer();
}

btnControlTimer.addEventListener('click', () => {
    controlTimer()
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