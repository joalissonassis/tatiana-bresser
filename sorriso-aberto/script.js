/* Sorriso Aberto — comportamento */

// Ano dinâmico no rodapé
document.getElementById("copyYear").textContent =
  `© ${new Date().getFullYear()} — feito com café na sala de espera`;

// Menu mobile
const menuBtn      = document.getElementById("menuBtn");
const mobileMenu   = document.getElementById("mobileMenu");
const iconOpen     = document.getElementById("menuIconOpen");
const iconClose    = document.getElementById("menuIconClose");

menuBtn.addEventListener("click", () => {
  const hidden = mobileMenu.classList.toggle("hidden");
  iconOpen.classList.toggle("hidden", !hidden);
  iconClose.classList.toggle("hidden", hidden);
});
document.querySelectorAll(".mobile-link").forEach(a =>
  a.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  })
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("revealed");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// FAQ acordeão
document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-btn");
  btn.addEventListener("click", () => {
    const isOpen = item.dataset.open === "true";
    document.querySelectorAll(".faq-item").forEach(other => {
      other.dataset.open = "false";
    });
    item.dataset.open = isOpen ? "false" : "true";
  });
});

// Formulário — feedback visual, sem backend
const form = document.getElementById("contatoForm");
const submitBtn = document.getElementById("submitBtn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = "Recebemos! Ligamos em breve ✿";
});
