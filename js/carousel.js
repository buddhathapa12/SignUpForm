const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const carouselElements = document.querySelector(".CarouselElements");

const carouselSection = document.querySelector(".CarouselSection");
const indicatorParents = document.querySelector(
  ".CarouselSection .CarouselPagination"
);

let index = 0;

let carouselWidth = document.querySelector(".carouselElements").offsetWidth;
CarouselPaginationIcon(carouselWidth);
window.addEventListener("resize", () => {
  index = 0;
  carouselWidth = document.querySelector(".carouselElements").offsetWidth;
  CarouselPaginationIcon(carouselWidth);
});

next.addEventListener("click", () => {
  if (window.innerWidth > 1160 && index < 1) index++;
  if (window.innerWidth <= 1160 && window.innerWidth > 910 && index < 2)
    index++;
  if (window.innerWidth <= 910 && index < 4) index++;
  carouselElements.style.transform = `translateX(-${index * carouselWidth}px)`;
  document
    .querySelector(".CarouselPagination .selected")
    .classList.remove("selected");
  indicatorParents.children[index].classList.add("selected");
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
  }

  document
    .querySelector(".CarouselPagination .selected")
    .classList.remove("selected");
  indicatorParents.children[index].classList.add("selected");

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
      carouselElements.style.transform =
        "translateX(" + ind * -carouselWidth + "px)";
    });
  });

function CarouselPaginationIcon(x) {
  if (x >= 960) {
    document
      .querySelectorAll(".CarouselPagination li")
      .forEach((indicator, ind) => {
        if (ind > 1) {
          indicator.style.display = "none";
        } else {
          indicator.style.display = "block";
        }
      });
  }
  if (x == 660) {
    document
      .querySelectorAll(".CarouselPagination li")
      .forEach((indicator, ind) => {
        if (ind > 2) {
          indicator.style.display = "none";
        } else {
          indicator.style.display = "block";
        }
      });
  }
  if (x == 300) {
    document
      .querySelectorAll(".CarouselPagination li")
      .forEach((indicator, ind) => {
        indicator.style.display = "block";
      });
  }
}
