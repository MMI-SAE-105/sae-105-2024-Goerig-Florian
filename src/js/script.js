const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;


if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
   
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");

// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    const scrollAmount = premierItem.clientWidth;
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    const scrollAmount = premierItem.clientWidth;
    carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
  });
}