const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const carouselElements = document.querySelector(".CarouselElements");

let index = 0;

let carouselWidth = document.querySelector(".carouselElements").offsetWidth;
window.addEventListener("resize", () => {
  index++;
  carouselWidth = document.querySelector(".carouselElements").offsetWidth;
});

next.addEventListener("click", () => {
  carouselElements.style.transform = `translateX(-${carouselWidth}px)`;
});

prev.addEventListener("click", () => {
  carouselElements.style.transform = `translateX(-${0}px)`;
});

window.addEventListener("resize", () => {
  let carouselWidth = document.querySelector(".carouselElements").offsetWidth;
});
