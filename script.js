/* ===== Hero Background Rotator ===== */
const hero = document.querySelector(".hero");
const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&q=80&w=1600&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&q=80&w=1600&fit=crop",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&q=80&w=1600&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&q=80&w=1600&fit=crop"
];

if (hero) {
  let index = 0;
  hero.style.backgroundImage = `url(${images[index]})`;
  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url(${images[index]})`;
  }, 5000);
}

/* ===== Unified Search Filter ===== */
const searchInput = document.getElementById("searchInput");
const destinationCards = document.querySelectorAll(".card");
const packageCards = document.querySelectorAll(".package-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function() {
    const filter = searchInput.value.toLowerCase();

    destinationCards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      card.style.display = title.includes(filter) ? "block" : "none";
    });

    packageCards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      card.style.display = title.includes(filter) ? "block" : "none";
    });
  });
}

/* ===== Booking Modal ===== */
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");
const bookingForm = document.getElementById("bookingForm");
const packageInput = document.getElementById("package");

if (modal && bookingForm && packageInput) {
  const buttons = document.querySelectorAll(".package-card button");
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
      const packageName = this.parentElement.querySelector("h3").innerText;
      packageInput.value = packageName;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (event) => {
    if (event.target === modal) modal.style.display = "none";
  });

  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert(`Thank you, ${bookingForm.name.value}! Your booking for "${bookingForm.package.value}" is done. Check your mail for payment and confirmation`);
    modal.style.display = "none";
    bookingForm.reset();
  });
}

/* ===== Contact Form ===== */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert(`Thank you, ${contactForm.name.value}! Your message has been sent. We will contact shortly`);
    contactForm.reset();
  });
}
