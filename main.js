import questions from './quiz.js';

let currentQuestionIndex = 0;
let score = 0;
let currentCategory = "";
let username = "";

function login() {
  const input = document.getElementById("username");
  if (input.value.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  username = input.value.trim();
  document.getElementById("login-container").classList.add("hidden");
  document.querySelector(".quiz-container").classList.remove("hidden");
}

function selectCategory(category) {
  if (!questions[category] || questions[category].length === 0) {
    alert("No questions available for this category.");
    return;
  }

  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;

  document.querySelector(".quiz-container").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const questionData = questions[currentCategory][currentQuestionIndex];

  if (!questionData) {
    alert("Error: No questions found!");
    return;
  }

  document.getElementById("question").textContent = questionData.q;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questionData.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsDiv.appendChild(button);
  });
}

function checkAnswer(selected) {
  const questionData = questions[currentCategory][currentQuestionIndex];

  if (selected === questionData.answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions[currentCategory].length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("user-result").textContent = 
    `${username}, your score is ${score}/${questions[currentCategory].length}`;
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  currentCategory = "";

  document.getElementById("result").classList.add("hidden");
  document.querySelector(".quiz-container").classList.remove("hidden");
}

window.login = login;
window.selectCategory = selectCategory;
window.restartQuiz = restartQuiz;

