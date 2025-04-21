import "../css/style.css";

import { words } from "./words";

const DOMSelectors = {
  container: document.querySelector("#lines-container"),
  easyModeBtn: document.querySelector("#easyModeBtn"),
  mediumModeBtn: document.querySelector("#mediumModeBtn"),
  hardModeBtn: document.querySelector("#hardModeBtn"),
  submitBtn: document.querySelector("#subBtn"),
  wordList: document.querySelector("#word-list"),
  startGameBtn: document.querySelector("#start-game-btn"),
  feedback: document.querySelector("#feedback"),
  guessInput: document.querySelector("#guess"),
  wordDisplay: document.querySelector("#word-display"),
};

let gameRunning = false;
let selectedWord = "";

function getRandomWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function startGame(difficulty) {
  if (!gameRunning) {
    gameRunning = true;
  }

  if (difficulty === "easy") {
    selectedWord = getRandomWord(words.easy);
  } else if (difficulty === "medium") {
    selectedWord = getRandomWord(words.medium);
  } else if (difficulty === "hard") {
    selectedWord = getRandomWord(words.hard);
  }

  DOMSelectors.wordDisplay.textContent = selectedWord;

  setTimeout(() => {
    let underscores = "";
    for (let i = 0; i < selectedWord.length; i++) {
      underscores += "_ ";
    }
    DOMSelectors.wordDisplay.textContent = underscores.trim();
  }, 1000);

  DOMSelectors.feedback.textContent = "";
  DOMSelectors.guessInput.value = "";
}

function submitGuess() {
  if (!gameRunning) return;

  let userGuess = DOMSelectors.guessInput.value.trim();

  if (userGuess === selectedWord) {
    DOMSelectors.feedback.textContent = "WOW! You have great memory!";

    setTimeout(() => {
      DOMSelectors.wordDisplay.textContent = "";
    }, 1000);
  } else {
    showWordAgain(userGuess);
  }

  DOMSelectors.guessInput.value = "";
}

function showWordAgain(userGuess) {
  let correctCount = 0;

  if (userGuess.length === selectedWord.length) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (userGuess[i] === selectedWord[i]) {
        correctCount++;
      }
    }

    DOMSelectors.feedback.textContent = `You got ${correctCount} letters in the correct position. Try again!`;
  } else {
    DOMSelectors.feedback.textContent = `Incorrect length. Try a ${selectedWord.length}-letter word!`;
  }

  DOMSelectors.wordDisplay.textContent = selectedWord;

  setTimeout(() => {
    let underscores = "";
    for (let i = 0; i < selectedWord.length; i++) {
      underscores += "_ ";
    }
    DOMSelectors.wordDisplay.textContent = underscores.trim();
  }, 1000);
}

DOMSelectors.easyModeBtn.addEventListener("click", () => {
  startGame("easy");
});

DOMSelectors.mediumModeBtn.addEventListener("click", () => {
  startGame("medium");
});

DOMSelectors.hardModeBtn.addEventListener("click", () => {
  startGame("hard");
});

DOMSelectors.submitBtn.addEventListener("click", submitGuess);
