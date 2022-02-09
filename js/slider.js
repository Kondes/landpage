const imgs = document.querySelectorAll(
  ".example__slider .example__slider-line img"
);
const exmpSliderLine = document.querySelector(".example__slider-line");
let counts = 0;
let widths;

function initial() {
  widths = document.querySelector(".example__slider").offsetWidth;
  exmpSliderLine.style.widths = widths * imgs.length + "px";
  imgs.forEach((item) => {
    item.style.widths = widths + "px";
    item.style.height = "auto";
  });
  rollSliders();
}
window.addEventListener("resize", initial);
initial();

document
  .querySelector(".example__slider-prev")
  .addEventListener("click", function () {
    counts--;
    if (counts < 0) {
      counts = imgs.length - 1;
    }
    rollSliders();
  });

document
  .querySelector(".example__slider-next")
  .addEventListener("click", function () {
    counts++;
    if (counts >= imgs.length) {
      counts = 0;
    }
    rollSliders();
  });

function rollSliders() {
  exmpSliderLine.style.transform = "translate(-" + counts * widths + "px)";
}
