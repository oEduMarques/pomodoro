const rainSound = new Audio('sounds/rain.m4a');
const rainSound2 = new Audio('sounds/rain.m4a');
let activeRain = rainSound;
const fireSound = new Audio('sounds/fire.mp3');
const natureSound = new Audio('sounds/nature-ambience.mp3');
const thunderSound = new Audio('sounds/thunder-norain.mp3');
const waterFallSound = new Audio('sounds/waterfall.mp3');

const ambientSounds = [rainSound, fireSound, natureSound, thunderSound, waterFallSound]

const soundMap = [
    { slider: 'rain-slider', audio: [rainSound, rainSound2] },
    { slider: 'fire-slider', audio: fireSound },
    { slider: 'nature-slider', audio: natureSound },
    { slider: 'thunder-slider', audio: thunderSound },
    { slider: 'waterfall-slider', audio: waterFallSound }
];

ambientSounds.forEach(sound => {
    sound.loop = false;
});

function setupSeamlessRain() {
    const checkOverlap = function() {
        const overlapTime = 2.5;
        
        if (this.currentTime > this.duration - overlapTime) {
            const nextRain = (activeRain === rainSound) ? rainSound2 : rainSound;
            
            if (nextRain.paused) {
                nextRain.volume = 0;
                nextRain.currentTime = 0;
                nextRain.play();
                
                const currentVol = document.getElementById('rain-slider').value;
                fadeCross(activeRain, nextRain, currentVol);
                
                activeRain.removeEventListener('timeupdate', checkOverlap);
                activeRain = nextRain;
                activeRain.addEventListener('timeupdate', checkOverlap);
            }
        }
    };

    activeRain.addEventListener('timeupdate', checkOverlap);
}

function fadeCross(outAudio, inAudio, targetVolume) {
    let step = 0.05;
    let interval = setInterval(() => {
        if (inAudio.volume < targetVolume) {
            inAudio.volume = Math.min(targetVolume, inAudio.volume + step);
            outAudio.volume = Math.max(0, outAudio.volume - step);
        } else {
            outAudio.pause();
            outAudio.volume = targetVolume;
            clearInterval(interval);
        }
    }, 50);
}

setupSeamlessRain();

soundMap.forEach(item => {
    const sliderElement = document.getElementById(item.slider);
    if (sliderElement) {
        sliderElement.addEventListener('input', () => {
            const vol = parseFloat(sliderElement.value);
            
            if (Array.isArray(item.audio)) {
                activeRain.volume = vol;
                if (vol > 0 && activeRain.paused) activeRain.play();
                if (vol == 0) {
                    rainSound.pause();
                    rainSound2.pause();
                }
            } else {
                item.audio.volume = vol;
                if (vol > 0 && item.audio.paused) {
                    item.audio.loop = true;
                    item.audio.play();
                }
                if (vol == 0) item.audio.pause();
            }
        });
    }
});

window.addEventListener('stopAllSounds', () => {
    soundMap.forEach(item => {
        item.audio.pause();
        item.audio.currentTime = 0;
        const sliderElement = document.getElementById(item.slider);
        if (sliderElement) sliderElement.value = 0;
    });

    alarmBell.play();
});