import "../css/style.css";

import JSConfetti from "js-confetti";

const init = () => {
  const $form = document.querySelector("form");
  const jsConfetti = new JSConfetti();

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    // jsConfetti.addConfetti();
    jsConfetti.addConfetti({
      emojis: ["🧦","👗", "👘", "🥻", "🩴", "🩱", "🩲", "🩳", "👙", "👚", "👛", "👜", "👝", "🎒", "👞", "👟", "🥾"],
      emojiSize: 50,
      confettiNumber: 100,
    });

  });
};

init();
