// const data = [
//   {
//     question: "What is 2 + 2?",
//     ans: 4,
//     options: [2, 4, 6, 8],
//   },
//   {
//     question: "What is 2 * 2 * 0 * 2?",
//     ans: 0,
//     options: [2, 0, 8, 222],
//   },
//   {
//     question: "What is 3 * 3?",
//     ans: 9,
//     options: [3, 9, 33, 6],
//   },
//   {
//     question: "Which is the biggest planet in solar system?",
//     ans: "Jupiter",
//     options: ["Jupiter", "Saturn", "Earth", "Mercury"],
//   },
//   {
//     question: "Who is the President of India?",
//     ans: "Draupadi Murmu",
//     options: ["Melody", "Trump", "Modi", "Draupadi Murmu"],
//   },
// ];

// const questionDiv = document.querySelector("#question");
// const options = document.querySelectorAll("#options button");
// const timerDiv = document.querySelector("#timer");
// const quizDiv = document.querySelector("#quiz");
// const scoreDiv = document.querySelector("#score");
// const scoreH2 = document.querySelector("#score h2");
// let questionNumber = 0;
// let time = 5;
// let score = 0;

// printQuestionAndAns();

// const interval = setInterval(() => {
//   if (time === 1) {
//     //IF THIS IS THE END OF QUESTIONS
//     if (questionNumber === data.length - 1) {
//       clearInterval(interval);
//       console.log("Quiz Over");
//       quizDiv.style.display = "none";
//       scoreDiv.style.display = "flex";
//       displayScore();
//     } else {
//       //RESET TIMER
//       time = 5;
//       timerDiv.innerText = time;

//       //PRINT NEXT QUESTION
//       questionNumber++;
//       printQuestionAndAns();
//     }
//   } else timerDiv.innerText = --time;
// }, 1000);

// function displayScore() {
//   scoreH2.innerText = "You scored " + score + " out of " + data.length;
// }

// function printQuestionAndAns() {
//   //RESET BACKGROUND COLOR ON OPTIONS
//   for (let i = 0; i < options.length; i++) {
//     options[i].classList.remove("correctAnswer", "inCorrectAnswer");
//   }

//   questionDiv.innerText = data[questionNumber].question;
//   for (let i = 0; i < options.length; i++) {
//     options[i].innerText = data[questionNumber].options[i];
//   }
// }

// //WHEN USER CLICKS AN OPTION
// for (let i = 0; i < options.length; i++) {
//   options[i].addEventListener("click", (e) => {
//     if (e.target.innerText == data[questionNumber].ans) {
//       score++;
//       e.target.classList.add("correctAnswer");
//     } else {
//       e.target.classList.add("inCorrectAnswer");
//     }
//   });
// }



const data = [
  {
    question: "What is 2 + 2?",
    ans: 4,
    options: [2, 4, 6, 8],
  },
  {
    question: "What is 2 * 2 * 0 * 2?",
    ans: 0,
    options: [2, 0, 8, 222],
  },
  {
    question: "What is 3 * 3?",
    ans: 9,
    options: [3, 9, 33, 6],
  },
  {
    question: "Which is the biggest planet in solar system?",
    ans: "Jupiter",
    options: ["Jupiter", "Saturn", "Earth", "Mercury"],
  },
  {
    question: "Who is the President of India?",
    ans: "Draupadi Murmu",
    options: ["Melody", "Trump", "Modi", "Draupadi Murmu"],
  },
];

const questionDiv = document.querySelector("#question");
const options = document.querySelectorAll("#options button");
const timerDiv = document.querySelector("#timer");
const quizDiv = document.querySelector("#quiz");
const scoreDiv = document.querySelector("#score");
const scoreH2 = document.querySelector("#score h2");
const message = document.querySelector("#message");

let questionNumber = 0;
let time = 5;
let score = 0;

data.sort(() => Math.random() -0.5);

printQuestionAndAns();

const interval = setInterval(() => {

  if (time === 1) {
    //IF THIS IS THE END OF QUESTIONS
    if (questionNumber === data.length - 1) {
      clearInterval(interval);
      quizDiv.style.display = "none";
      scoreDiv.style.display = "flex";
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

// THIS SHOWS THE SCORE AT THE END
function displayScore() {
  scoreH2.innerText = "You scored " + score + " out of " + data.length;

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
