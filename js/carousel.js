const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const carouselElements = document.querySelector(".CarouselElements");

const carouselWidth = document.querySelector(".carouselElements").offsetWidth;

next.addEventListener("click", () => {
  carouselElements.style.transform = `translateX(-${carouselWidth}px)`;
});

prev.addEventListener("click", () => {
  carouselElements.style.transform = `translateX(-${0}px)`;
});
