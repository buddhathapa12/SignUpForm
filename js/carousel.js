const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const carouselElements = document.querySelector(".CarouselElements");

const carouselSection = document.querySelector(".CarouselSection");

let index = 0;

let carouselWidth = document.querySelector(".carouselElements").offsetWidth;
window.addEventListener("resize", () => {
  index = 0;
  console.log(carouselWidth);

  console.log("screen" + window.innerWidth);
  carouselWidth = document.querySelector(".carouselElements").offsetWidth;
  console.log("Hello" + carouselSection.offsetWidth);
});

next.addEventListener("click", () => {
  if (window.innerWidth > 1160 && index < 1) index++;
  if (window.innerWidth <= 1160 && window.innerWidth > 910 && index < 2)
    index++;
  if (window.innerWidth <= 910 && index < 4) index++;
  console.log(index);
  carouselElements.style.transform = `translateX(-${index * carouselWidth}px)`;
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
  }
  next.style.display = "block";
  carouselElements.style.transform = `translateX(-${index * carouselWidth}px)`;
});

window.addEventListener("resize", () => {
  let carouselWidth = document.querySelector(".carouselElements").offsetWidth;
});
