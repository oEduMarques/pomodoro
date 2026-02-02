const rainSound = new Audio('sounds/rain.m4a');
const fireSound = new Audio('sounds/fire.mp3');
const natureSound = new Audio('sounds/nature-ambience.mp3');
const thunderSound = new Audio('sounds/thunder-norain.mp3');
const waterFallSound = new Audio('sounds/waterfall.mp3');
const allSounds = [rainSound, fireSound, natureSound, thunderSound, waterFallSound]

const soundMap = [
    { slider: 'rain-slider', audio: rainSound },
    { slider: 'fire-slider', audio: fireSound },
    { slider: 'nature-slider', audio: natureSound },
    { slider: 'thunder-slider', audio: thunderSound },
    { slider: 'waterfall-slider', audio: waterFallSound }
];

allSounds.forEach(sound => {
    sound.loop = true;
});

soundMap.forEach(item => {
    const sliderElement = document.getElementById(item.slider);
    
    // Verifica se o slider existe no HTML para não dar erro
    if (sliderElement) {
        sliderElement.addEventListener('input', () => {
            const vol = sliderElement.value;
            item.audio.volume = vol;
            if (vol > 0 && item.audio.paused) item.audio.play();
            if (vol == 0) item.audio.pause();
        });
    }
});


// 3. A MÁGICA: Escutar o evento do script.js para parar tudo
window.addEventListener('stopAllSounds', () => {
    soundMap.forEach(item => {
        item.audio.pause();
        item.audio.currentTime = 0;
        const sliderElement = document.getElementById(item.slider);
        if (sliderElement) sliderElement.value = 0;
    });
});