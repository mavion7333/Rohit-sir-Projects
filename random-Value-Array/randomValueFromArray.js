import { data } from "./data.js";

const questionDiv = document.querySelector("#question");
const options = document.querySelectorAll("#options button");
const timerDiv = document.querySelector("#timer");
const quizDiv = document.querySelector("#quiz");
const scoreDiv = document.querySelector("#score");
const scoreH1 = document.querySelector("#score h1");
const message = document.querySelector("#message");
const startQuiz = document.querySelector("#startquiz");
const userName = document.querySelector("#username");
const startBtn = document.querySelector("#startbtn");

let questionNumber = 0;
let time = 5;
let score = 0;
let order = [];

const players =
  localStorage.getItem("playersData") !== null
    ? JSON.parse(localStorage.getItem("playersData"))
    : [];

let currentPlayerId = null;

order = getRandomOrder();
console.log(order);

data.sort(() => Math.random() - 0.5);

function startTimer() {
  const interval = setInterval(() => {

    if (time === 0) {
      if (questionNumber === data.length - 1) {
        clearInterval(interval);

        quizDiv.style.display = "none";
        scoreDiv.style.display = "flex";

        updateScoreLS(currentPlayerId);
        displayScore();

      } else {
        questionNumber++;
        time = 5;
        timerDiv.innerText = time;
        printQuestionAndAns();
      }
    } else {
      time--;
      timerDiv.innerText = time;
    }
  }, 1000);
}



//////////////////////////////////////////////////////

startBtn.addEventListener("click", function () {
  if (userName.value.trim() === "") {
    alert("Please enter your name!");
    return;
  }

  const player = {
    id: Date.now(),
    name: userName.value,
    score: 0,
    startTime: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
  };

  currentPlayerId = player.id;
  players.push(player);

  localStorage.setItem("playersData", JSON.stringify(players));

  startQuiz.style.display = "none";
  quizDiv.style.display = "block";

  printQuestionAndAns();
  startTimer();
});


function updateScoreLS(id) {
  const players = JSON.parse(localStorage.getItem("playersData"));

  const updatedPlayers = players.map((player) => {
    if (player.id === id) {
      player.score = score;
      player.endTime = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
    }
    return player;
  });

  localStorage.setItem("playersData", JSON.stringify(updatedPlayers));
}
//////////////////////////////////////////////////////////////

// THIS SHOWS THE SCORE AT THE END
function displayScore() {

  scoreH1.innerHTML = `Congratulations :- ${userName.value}<br><br>
        You scored ${score} out of ${data.length}`;

}
//RESET BACKGROUND COLOR ON OPTIONS
function printQuestionAndAns() {

  questionDiv.innerText = data[questionNumber].question;
  message.innerText = "";

  for (let i = 0; i < options.length; i++) {
    options[i].innerText = data[questionNumber].options[i];

    options[i].classList.remove("correctAnswer");
    options[i].classList.remove("inCorrectAnswer");
    options[i].disabled = false;
  }
}


// //WHEN USER CLICKS AN OPTION
for (let i = 0; i < options.length; i++) {

  options[i].addEventListener("click", function (e) {
    for (let j = 0; j < options.length; j++) {
      options[j].disabled = true;
    }

    if (e.target.innerText == data[questionNumber].ans) {
      score++;

      e.target.classList.add("correctAnswer");
      message.innerText = "✅ Correct Answer!";
      message.style.color = "green";

    } else {
      e.target.classList.add("inCorrectAnswer");
      message.innerText = "❌ Wrong Answer!";
      message.style.color = "red";

      for (let j = 0; j < options.length; j++) {
        if (options[j].innerText == data[questionNumber].ans) {
          options[j].classList.add("correctAnswer");
        }
      }
    }
  });
}
function getRandomOrder() {
  for (let i = 0; i < data.length; i++) {
    const randomNumber = getDistinctOrder();
    order.push(randomNumber)
  }
  return order
}

function getDistinctOrder() {
  const randomValue = Math.floor(Math.random() * data.length);
  if (order.includes(randomValue)) return getDistinctOrder();
  else {
    return randomValue;
  }
}
