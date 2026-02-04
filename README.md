# ⏳ Gi Pomodoro & Ambient Mixer

A professional productivity web application designed for deep focus sessions. This project combines a classic Pomodoro timer with a customizable ambient sound mixer and real-time session tracking.

## 🚀 Live Demo
You can access the project here: https://oedumarques.github.io/pomodoro/

## ✨ New Features
- **Session Tracking:** Real-time counters for Total Focus and Total Break time during the current session.
- **Dynamic Tab Title:** View the remaining time directly in the browser tab, even when paused.
- **SVG Favicon:** Integrated hourglass emoji (⏳) as a favicon using SVG data URI for a clean, zero-asset UI.
- **Ambient Sound Mixer:** Mix multiple sounds (Rain, Fire, Nature, Thunder, Waterfall) with independent volume control.
- **Smart Audio Engine:** All background sounds automatically stop when the timer finishes.

## 🛠️ Technical Highlights
- **Architecture:** Decoupled logic using Custom Events to communicate between the Timer and Audio engines.
- **DOM Manipulation:** High-performance UI updates using `setInterval` and `padStart` for time formatting.
- **Responsive Layout:** Mobile-first design focusing on large, accessible touch targets for timer controls.

## 📂 Project Structure
```text
pomodoro-app/
├── index.html          # Main structure & Meta tags
├── css/
│   └── style.css       # Layout & Glassmorphism effects
├── js/
│   ├── script.js       # Core Timer & Accumulator logic
│   └── soundScript.js  # Audio Mixer & Event listeners
└── sounds/             # High-quality audio assets (.m4a/.mp3)