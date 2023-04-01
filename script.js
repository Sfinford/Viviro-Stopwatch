let hours = 0;
let minutes = 0;
let seconds = 0;
let centiseconds = 0;
let running = false;
let interval;

function updateTime() {
  centiseconds++;
  if (centiseconds == 100) {
    centiseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
  document.getElementById("centiseconds").innerText = centiseconds.toString().padStart(2, "0");
}

function start() {
  if (!running) {
    interval = setInterval(updateTime, 10);
    running = true;
  }
}

function stop() {
  clearInterval(interval);
  running = false;
}

function reset() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  document.getElementById("hours").innerText = "00";
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
  document.getElementById("centiseconds").innerText = "00";
  running = false;
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
