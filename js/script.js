const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const text = "Hlw, I'm Sahriar — Welcome to my Portfolio website";
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

let i = 0;

// Optional: typing sound
const typingSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-typewriter-classic-return-1366.mp3");

function typeCharacter() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);

    // Play sound for non-space characters
    if (text.charAt(i) !== " ") {
      typingSound.currentTime = 0;
      typingSound.play();
    }

    i++;
    setTimeout(typeCharacter, 100);
  } else {
    // ✅ টাইপিং শেষ → কার্সর সরিয়ে দিন
    cursor.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", typeCharacter);


