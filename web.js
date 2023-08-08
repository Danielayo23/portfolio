window.addEventListener("load", () => {
  const header = document.querySelector("header");
  header.style.opacity = "1"; // Change opacity to 1 for fade-in effect
});

// JavaScript function to enlarge image when clicked
function enlargeImage(img) {
  img.style.transform = "scale(1.2)"; // Enlarge the clicked image
}
