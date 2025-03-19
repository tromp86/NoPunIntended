import { phrasesTNoPunIntended } from "./NoPunIntended.js";

let shuffledPhrases = [...phrasesTNoPunIntended]; // Копіюємо масив фраз
let currentIndex = 0;

// Перемішуємо масив фраз
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(shuffledPhrases); // Перемішуємо масив при ініціалізації

const phraseElement = document.getElementById("phrase");
const translationElement = document.getElementById("translation");
const nextButton = document.getElementById("next");
const counterElement = document.getElementById("counter");

function showPhrase() {
  const currentPhrase = shuffledPhrases[currentIndex];
  phraseElement.textContent = currentPhrase.phrase;
  translationElement.textContent = currentPhrase.translation;
  updateCounter();
}

function updateCounter() {
  const remainingPhrases = shuffledPhrases.length - currentIndex - 1;
  counterElement.innerHTML = `Phrases left: <span class="counter-number">${remainingPhrases}</span>`;
}

// Дії при натисканні кнопки "Далі"
nextButton.addEventListener("click", () => {
  nextPhrase();
});

// Дії при натисканні стрілки вправо
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextPhrase();
  }
});

// Функція для показу наступної фрази
function nextPhrase() {
  currentIndex++;
  if (currentIndex < shuffledPhrases.length) {
    showPhrase();
  } else {
    // Закінчили всі фрази
    console.log("You've reviewed all the phrases!");
    currentIndex = 0; // Якщо потрібно перезапустити
    shuffleArray(shuffledPhrases); // Перемішуємо масив знову
    showPhrase(); // Починаємо спочатку
  }
}

// Ініціалізуємо першу фразу
showPhrase();




// window.openNav = function () {
//   document.getElementById("myNav").style.width = "100%";
// };

// window.closeNav = function () {
//   document.getElementById("myNav").style.width = "0";
// };
