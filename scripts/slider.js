const sliderContent = document.querySelector(".slider-content");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

firstSlide = document.querySelector("#firstItem");
secondSlide = document.querySelector("#secondItem");
thirdSlide = document.querySelector("#thirdItem");

let curPos = 0;
let movePosition = firstSlide.clientWidth + 100;

const movingPrev = () => {
  btnNext.style.display = "block";
  curPos += movePosition;
  sliderContent.style.transform = `translateX(${curPos}px)`;
  if (curPos !== 0 && curPos > 0) {
    btnPrev.style.display = "none";
  }
};

const movingNext = () => {
  btnPrev.style.display = "block";
  curPos -= movePosition;
  sliderContent.style.transform = `translateX(${curPos}px)`;
  if (curPos !== 0 && curPos < 0) {
    btnNext.style.display = "none";
  }
};

function slider() {
  btnPrev.addEventListener("click", movingPrev);
  btnNext.addEventListener("click", movingNext);
}

slider();
