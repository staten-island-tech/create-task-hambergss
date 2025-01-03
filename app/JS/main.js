import "../css/style.css";

import { words } from "./words";

const DOMSelectors = {
  container: document.querySelector("main-container"),
  easySorter: document.querySelector("#easySorter"),
  mediumSorter: document.querySelector("mediumSorter"),
  hardSorter: document.querySelector("hardSorter"),
  submitBtn: document.querySelector("#subBtn"),
  wordList: document.querySelector("#word-list"),
};

const wordsListContainer = document.getElementById("word-list");

function createWordLine(words) {
  wordsListContainer.innerHTML = "";
  words.forEach((word) => {
    const wordHTML = `
        <div class="word-item">
          <h2>${word.name}</h2>
        </div>
      `;
    wordsListContainer.insertAdjacentHTML("beforeend", wordHTML);
  });
}
createWordLine(wordList);

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
  if (easyModeBtn.id === "yes") {
    
  }
}
