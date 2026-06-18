// =========================
// Lusanda Rentals - about.js
// =========================

// Accordion for Values
const accordion = document.querySelector(".accordion");
if (accordion) {
  const header = accordion.querySelector("h3");
  const content = accordion.querySelector("div");
  content.style.display = "none";
  header.addEventListener("click", () => {
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";
    header.textContent = isVisible ? "Click to expand" : "Click to collapse";
  });
}

// Scroll progress bar
const progressBar = document.createElement("div");
progressBar.id = "progress-bar";
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.backgroundColor = "#0077cc";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});
