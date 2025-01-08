import "../css/style.css";

import { words } from "./words";

const DOMSelectors = {
  container: document.querySelector("lines-container"),
  easySorter: document.querySelector("#easySorter"),
  mediumSorter: document.querySelector("mediumSorter"),
  hardSorter: document.querySelector("hardSorter"),
  createLines: document.querySelector("create-lines-btn"),
  submitBtn: document.querySelector("#subBtn"),
  wordList: document.querySelector("#word-list"),
};

function createWordLine(words) {
  const wordsListContainer = document.getElementById("#lines-container");
  wordsListContainer.innerHTML = "";
  words.forEach((word) => {
    word.split('').forEach(letter => { 
      const newLineHTML = `<div>Letter: ${letter}</div>`;
      wordsListContainer.insertAdjacentHTML("beforeend", newLineHTML);
    })
  });
}
document.querySelector("#create-lines-btn").addEventListener("click", function() {
  createWordLine(words);
})

function easyMode() {
  DOMSelectors.easySorter.addEventListener("click", () => {
    const easyWords = words.filter((word) => word.easy === "Easy");
    createWordLine(easyWords); 
  });
}

DOMSelectors.easyModeBtn.addEventListener("click", easyMode);

function mediumMode() {
  DOMSelectors.mediumSorter.addEventListener("click", () => {
    const mediumWords = words.filter((word) => word.medium === "Medium");
    createWordLine(mediumWords);
  });
}

DOMSelectors.mediumModeBtn.addEventListener("click", mediumMode);

function hardMode() {
  DOMSelectors.hardSorter.addEventListener("click", () => {
    const hardWords = words.filter((word) => word.easy === "Hard");
    createWordLine(hardWords);
  });
}

DOMSelectors.hardModeBtn.addEventListener("click", hardMode);

function getRandomWord(wordList) {
  return wordList[Math/floor(Math.random() * wordList.length)];
}

let selectedWord = "";

function startGame() {
  const difficulty = document.getElementById('difficulty').value;

  if (difficulty === "easy") {
    selectedWord = getRandomWord(easyMode);
  } else if (difficulty === "medium") {
    selectedWord = getRandomWord(mediumMode);
  } else if (difficulty === "hard") {
    selectedWord = getRandomWord(hardMode);
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
    document.getElementById("feedback").textContent = "WOW You have great memory!";
  } else {
    document.getElementById("feedback").textContent = "You have seen too much brainrot";
  }

  document.getElementById("guess").value = "";
}

