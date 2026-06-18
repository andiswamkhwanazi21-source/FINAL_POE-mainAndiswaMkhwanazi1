// =========================
// Lusanda Rentals - enquiry.js
// =========================

const enquiryForm = document.getElementById("enquiryForm");
const responseBox = document.getElementById("enquiryResponse");

enquiryForm.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  enquiryForm.querySelectorAll("input, textarea, select").forEach(field => {
    const error = field.nextElementSibling;
    if (!field.checkValidity()) {
      error.textContent = "⚠️ Please fill this field correctly.";
      valid = false;
    } else {
      error.textContent = "";
    }
  });

  if (valid) {
    responseBox.textContent = "✅ Thank you! Your booking enquiry has been submitted.";
    responseBox.classList.add("success");
    enquiryForm.reset();
  }
});

// Date validation
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
function validateDates() {
  if (checkin.value && checkout.value) {
    if (new Date(checkout.value) <= new Date(checkin.value)) {
      checkout.nextElementSibling.textContent = "⚠️ Checkout must be after check-in.";
    } else {
      checkout.nextElementSibling.textContent = "";
    }
  }
}
checkin.addEventListener("change", validateDates);
checkout.addEventListener("change", validateDates);

// Character counter
const details = document.getElementById("details");
const counter = document.createElement("small");
details.parentNode.appendChild(counter);
details.addEventListener("input", () => {
  counter.textContent = `${details.value.length} / 500 characters`;
});
