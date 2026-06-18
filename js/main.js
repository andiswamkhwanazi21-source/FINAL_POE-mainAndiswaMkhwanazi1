// =========================
// Lusanda Rentals - main.js
// =========================

// Back-to-top button with fade effect
const backToTop = document.createElement("button");
backToTop.textContent = "↑ Top";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.opacity = window.scrollY > 300 ? "1" : "0";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animated page load
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});
