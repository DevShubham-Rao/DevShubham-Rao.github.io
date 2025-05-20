document.addEventListener("scroll", function () {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    const position = img.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      img.style.opacity = "1";
      img.style.transform = "translateY(0)";
    }
  });
});
const text = "Welcome to Verdant Kitchen!";
let index = 0;
const speed = 100; // Adjust speed (milliseconds per character)

function typeEffect() {
  document.getElementById("welcomeText").textContent = text.substring(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(typeEffect, speed);
  } else {
    document.getElementById("welcomeText").style.borderRight = "none"; // Remove cursor after completion
  }
}

// Start animation when page loads
window.onload = typeEffect;


