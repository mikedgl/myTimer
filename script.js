const btnStart = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");
const btnReset = document.querySelector("#btn-reset");
const timer = document.querySelector("#timer");

let seconds = 0;
let interval;

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    timer.innerText = getTime(seconds);
  }, 1000);
}

function getTime(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.id === "btn-start") start();
  if (btn.id === "btn-stop") stop();
  if (btn.id === "btn-reset") reset();
});

function start() {
  timer.classList.remove("stop");
  if (!btnStart.classList.contains("active")) {
    btnStart.classList.add("active");
    startTimer();
  }
}

function stop() {
  if (btnStart.classList.contains("active")) {
    clearInterval(interval);
    btnStart.classList.remove("active");
    timer.classList.add("stop");
  }
}

function reset() {
  clearInterval(interval);
  timer.innerText = "00:00:00";
  seconds = 0;
  btnStart.classList.remove("active");
  timer.classList.remove("stop");
}
