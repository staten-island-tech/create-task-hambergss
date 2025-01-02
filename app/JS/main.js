import "../css/style.css";

const words = {
  easy: [
    "apple",
    "ball",
    "cat",
    "dog",
    "house",
    "tree",
    "book",
    "car",
    "sun",
    "happy",
  ],
  medium: [
    "library",
    "journey",
    "mystery",
    "puzzle",
    "tiger",
    "guitar",
    "storm",
    "planet",
    "river",
    "chicken",
  ],
  hard: [
    "metamorphosis",
    "subterranean",
    "conglomerate",
    "ephemeral",
    "quixotic",
    "paradox",
    "cacophony",
    "serendipity",
    "susceptible",
    "magnanimous",
  ],
};

const DOMSelectors = {
  container: document.getElementById("main-container"),
  easyModeBtn: document.getElementById("easyMode-btn"),
  mediumModeBtn: document.getElementById("mediumMode-btn"),
  hardModeBtn: document.getElementById("hardMode-btn"),
  submitBtn: document.getElementById("sub-btn")
};

const container = document.getElementById("main-container");

function easyMode() {
  return (htmlContent = words.easy
    .map((word) => `<div class="word-class">${word}</div>`)
    .join(""));
}

DOMSelectors.easyModeBtn.addEventListener("click", easyMode);

function mediumMode() {
  return (htmlContent = words.medium
    .map((word) => `<div class="word-class">${word}</div>`)
    .join(""));
}
const mediumHtmlContent = mediumMode();
container.innerHTML = mediumHtmlContent;

function hardMode() {
  return (htmlContent = words.hard
    .map((word) => `<div class="word-class">${word}</div>`)
    .join(""));
}
const hardHTMLContent = hardMode();
container.innerHTML = hardHTMLContent;

function submitBtn(event) {
  if (easyModeBtn.id === 'yes') {
    
  }

}
