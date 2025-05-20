// Typewriter Effect for the Welcome Text
const text = "Welcome to Verdant Kitchen!";
let index = 0;
const speed = 100; // milliseconds per character

function typeEffect() {
  const welcomeEl = document.getElementById("welcomeText");
  welcomeEl.textContent = text.substring(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(typeEffect, speed);
  } else {
    welcomeEl.style.borderRight = "none"; // Remove cursor after completion
  }
}

// Start the typewriter effect on page load
window.onload = function() {
  typeEffect();
};

// Animated Page Transition on Load
document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("page-content");
  // Initially set it to faded out if you want to start from opacity 0
  // content.classList.add("fade-out"); 
  // Then, remove the fade-out class to trigger a fade in
  setTimeout(() => {
    content.classList.remove("fade-out");
  }, 100); // A short delay to ensure the class removal triggers the transition
});

// Optional: Animated Page Transition on Link Click
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const destination = this.getAttribute("href");
    // Only apply to internal links:
    if (destination && destination !== "#" && !this.target) {
      e.preventDefault();
      const content = document.getElementById("page-content");
      content.classList.add("fade-out"); // Trigger fade out
      setTimeout(() => {
        window.location.href = destination;
      }, 500); // Match the CSS transition duration
    }
  });
});
