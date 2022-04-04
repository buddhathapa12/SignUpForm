const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const carouselElements = document.querySelector(".CarouselElements");

const carouselSection = document.querySelector(".CarouselSection");

let index = 0;

let carouselWidth = document.querySelector(".carouselElements").offsetWidth;
window.addEventListener("resize", () => {
  index = 0;
  carouselWidth = document.querySelector(".carouselElements").offsetWidth;
});

next.addEventListener("click", () => {
  if (window.innerWidth > 1160 && index < 1) index++;
  if (window.innerWidth <= 1160 && window.innerWidth > 910 && index < 2)
    index++;
  if (window.innerWidth <= 910 && index < 4) index++;
  carouselElements.style.transform = `translateX(-${index * carouselWidth}px)`;
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
  }
  next.style.display = "block";
  carouselElements.style.transform = `translateX(-${index * carouselWidth}px)`;
});

carouselPagination = document.querySelector(".CarouselPagination");

document
  .querySelectorAll(".CarouselPagination li")
  .forEach((indicator, ind) => {
    indicator.addEventListener("click", () => {
      //   console.log(ind);
      document
        .querySelector(".CarouselPagination .selected")
        .classList.remove("selected");
      indicator.classList.add("selected");

      let style =
          document.querySelector(".CarouselItem").currentStyle ||
          window.getComputedStyle(document.querySelector(".CarouselItem")),
        width = document.querySelector(".CarouselItem").offsetWidth, // or use style.width
        margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);

      elementWidth = width + margin;
      console.log(elementWidth);
      carouselElements.style.transform =
        "translateX(" + ind * -elementWidth + "px)";
    });
  });
