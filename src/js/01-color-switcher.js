const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");

startButton.addEventListener("click", startBackgroundChange);
stopButton.addEventListener("click", stopBackgroundChange);

let intervalId;

function startBackgroundChange() {
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
}

function stopBackgroundChange() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


/* Another way */
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//   }

//   let intervalId;
//   const startBtn = document.querySelector('[data-start]');
//   const stopBtn = document.querySelector('[data-stop]');

//   startBtn.addEventListener('click', () => {
//     startBtn.disabled = true;
//     stopBtn.disabled = false;

//     intervalId = setInterval(() => {
//       document.body.style.backgroundColor = getRandomHexColor();
//     }, 1000);
//   });

//   stopBtn.addEventListener('click', () => {
//     clearInterval(intervalId);
//     startBtn.disabled = false;
//     stopBtn.disabled = true;
//   });
