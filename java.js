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
    if (position < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
