// =========================
// Lusanda Rentals - index.js
// =========================

// Fade-in sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Gallery modal
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${img.src}" alt="${img.alt}">
        <p>${img.alt}</p>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelector(".close").addEventListener("click", () => modal.remove());
  });
});

// Dynamic greeting
const welcomeSection = document.querySelector(".card h2");
if (welcomeSection) {
  const hour = new Date().getHours();
  let greeting = "Welcome to Lusanda Rentals";
  if (hour < 12) greeting = "🌞 Good Morning, Welcome to Lusanda Rentals";
  else if (hour < 18) greeting = "🌤️ Good Afternoon, Welcome to Lusanda Rentals";
  else greeting = "🌙 Good Evening, Welcome to Lusanda Rentals";
  welcomeSection.textContent = greeting;
}
