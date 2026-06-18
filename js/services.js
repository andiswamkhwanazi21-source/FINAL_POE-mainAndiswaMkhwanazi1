// =========================
// Lusanda Rentals - services.js
// =========================

// Gallery modal with next/prev
document.querySelectorAll(".gallery").forEach(gallery => {
  const images = gallery.querySelectorAll("img");
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      let currentIndex = index;
      const modal = document.createElement("div");
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${img.src}" alt="${img.alt}">
          <p>${img.alt}</p>
          <button class="prev">⟨ Prev</button>
          <button class="next">Next ⟩</button>
        </div>`;
      document.body.appendChild(modal);

      const modalImg = modal.querySelector("img");
      const caption = modal.querySelector("p");

      function showImage(i) {
        modalImg.src = images[i].src;
        caption.textContent = images[i].alt;
        currentIndex = i;
      }

      modal.querySelector(".close").addEventListener("click", () => modal.remove());
      modal.querySelector(".prev").addEventListener("click", () => {
        showImage((currentIndex - 1 + images.length) % images.length);
      });
      modal.querySelector(".next").addEventListener("click", () => {
        showImage((currentIndex + 1) % images.length);
      });
    });
  });
});

// Rotating testimonials
const testimonials = document.querySelectorAll("blockquote");
let testimonialIndex = 0;
function showTestimonial() {
  testimonials.forEach((t, i) => {
    t.style.display = i === testimonialIndex ? "block" : "none";
  });
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
if (testimonials.length > 0) {
  showTestimonial();
  setInterval(showTestimonial, 5000);
}
