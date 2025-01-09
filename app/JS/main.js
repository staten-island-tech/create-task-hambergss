import "../css/style.css";

import { words } from "./words";

const DOMSelectors = {
  container: document.querySelector("#lines-container"),
  easySorter: document.querySelector("#easySorter"),
  mediumSorter: document.querySelector("#mediumSorter"),
  hardSorter: document.querySelector("#hardSorter"),
  createLines: document.querySelector("#create-lines-btn"),
  submitBtn: document.querySelector("#subBtn"),
  wordList: document.querySelector("#word-list"),
  easyModeBtn: document.querySelector("#easyModeBtn"),
  mediumModeBtn: document.querySelector("#mediumModeBtn"),
  hardModeBtn: document.querySelector("#hardModeBtn"),
};

function createWordLine(wordsArray) {
  const wordsListContainer = document.getElementById("lines-container");
  wordsListContainer.innerHTML = ""; // Clear existing content
  wordsArray.forEach((word) => {
    word.split("").forEach((letter) => {
      const newLineHTML = `<div>Letter: ${letter}</div>`;
      wordsListContainer.insertAdjacentHTML("beforeend", newLineHTML);
    });
  });
}

DOMSelectors.easyModeBtn.addEventListener("click", function () {
  createWordLine(words.easy);
});

DOMSelectors.mediumModeBtn.addEventListener("click", function () {
  createWordLine(words.medium);
});

DOMSelectors.hardModeBtn.addEventListener("click", function () {
  createWordLine(words.hard);
});

function getRandomWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

let selectedWord = "";

function startGame() {
  const difficulty = document.getElementById("difficulty").value;

  if (difficulty === "easy") {
    selectedWord = getRandomWord(words.easy);
  } else if (difficulty === "medium") {
    selectedWord = getRandomWord(words.medium);
  } else if (difficulty === "hard") {
    selectedWord = getRandomWord(words.hard);
  }

  let underscores = "";
  for (let i = 0; i < selectedWord.length; i++) {
    underscores += "_";
  }

  document.getElementById("word-display").innerHTML = underscores.trim();
  document.getElementById("feedback").textContent = "";
  document.getElementById("guess").value = "";
}

function submitBtn() {
  let userGuess = document.getElementById("guess").value.trim();

  if (userGuess === selectedWord) {
    document.getElementById("feedback").textContent =
      "WOW You have great memory!";
  } else {
    document.getElementById("feedback").textContent =
      "You have seen too much brainrot";
  }

  document.getElementById("guess").value = "";
}

DOMSelectors.submitBtn.addEventListener("click", submitBtn);
