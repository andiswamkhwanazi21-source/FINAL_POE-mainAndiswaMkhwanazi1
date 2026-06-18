// =========================
// Lusanda Rentals - contact.js
// =========================

const contactForm = document.getElementById("contactForm");
const contactResponse = document.getElementById("contactResponse");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  contactForm.querySelectorAll("input, textarea, select").forEach(field => {
    const error = field.nextElementSibling;
    if (!field.checkValidity()) {
      error.textContent = "⚠️ Please fill this field correctly.";
      valid = false;
    } else {
      error.textContent = "";
    }
  });

  if (valid) {
    contactResponse.textContent = "📩 Thank you! Your message has been sent successfully.";
    contactResponse.classList.add("success");
    contactForm.reset();
  }
});

// Character counter
const messageBox = document.getElementById("message");
const counter = document.createElement("small");
messageBox.parentNode.appendChild(counter);
messageBox.addEventListener("input", () => {
  counter.textContent = `${messageBox.value.length} / 500 characters`;
});

// Auto-fill message type based on keywords
messageBox.addEventListener("blur", () => {
  const text = messageBox.value.toLowerCase();
  const messageType = document.getElementById("messageType