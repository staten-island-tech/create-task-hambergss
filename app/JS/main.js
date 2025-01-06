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
    word.split('').forEach(letter => { //splits the word into a array of letters
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
    createWordLine(easyWords); //to make the easyWords declared inside the eventlistener
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

function submitBtn(event) {
  if () {
    
  }
}
