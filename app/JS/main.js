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
  easySubBtn: document.getElementById("easySub-btn"),
  mediumSubBtn: document.getElementById("mediumSub-btn"),
  hardSubBtn: document.getElementById("hardSub-btn"),

};

DOMSelectors.easyModeBtn.addEventListener("click")

function easyModeBtn(easy) {
  const easy = words.forEach((word) => console.log(word.easy));
}

easyModeBtn(easy);