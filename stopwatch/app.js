const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const clearBtn = document.querySelector(".clear");

const watchDays = document.querySelector(".days");
const watchHours = document.querySelector(".hours");
const watchMinutes = document.querySelector(".minutes");
const watchSeconds = document.querySelector(".seconds");

const watchContainer = document.querySelector("watch-container");

startBtn.addEventListener("click", updateWatch);

// Functions
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateWatch() {
  startBtn.disabled = true;

  let counterInt = setInterval(function () {
    seconds++;
    // ADDING
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
        if (hours == 24) {
          hours = 0;
          days++;
        }
      }
    }
    watchSeconds.textContent = `Seconds: ${seconds}`;
    watchMinutes.textContent = `Minutes: ${minutes}`;
    watchHours.textContent = `Hours: ${hours}`;
    watchDays.textContent = `Days: ${days}`;
  }, 10);

  //   CLEAR BUTTON
  clearBtn.addEventListener("click", function () {
    clearInterval(counterInt);
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    watchSeconds.textContent = `Seconds: ${seconds}`;
    watchMinutes.textContent = `Minutes: ${minutes}`;
    watchHours.textContent = `Hours: ${hours}`;
    watchDays.textContent = `Days: ${days}`;
    startBtn.disabled = false;
  });

  //   STOP BUTTON
  stopBtn.addEventListener("click", function () {
    clearInterval(counterInt);
    startBtn.disabled = false;
  });
}
