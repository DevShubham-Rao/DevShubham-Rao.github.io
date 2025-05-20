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

document.addEventListener("scroll", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight * 0.9) { // Trigger earlier
      el.classList.add("visible");
    }
  });
});
