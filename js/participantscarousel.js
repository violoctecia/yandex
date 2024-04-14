const sliderr2 = document.getElementById("sliderr");
const arrowLeftt2 = document.querySelector(".arrow-leftt");
const arrowRightt2 = document.querySelector(".arrow-rightt");
const slidess2 = document.querySelectorAll(".slidee");
const bottomm2 = document.getElementById("bottomm");

let currentSlideIndex2 = 0;
const totalSlides = slidess2.length;
let visibleSlides = 3;
const intervalDuration = 4000;

function updatePagination() {
  let startIndex = currentSlideIndex2 + 1;
  let endIndex = currentSlideIndex2 + visibleSlides;
  if (endIndex > totalSlides) {
    endIndex = totalSlides;
  }
  bottomm2.textContent = `${endIndex} / ${totalSlides}`;
  bottomm2.innerHTML = bottomm2.innerHTML.replace(
    /(\d+) \/ (\d+)/,
    "<span>$1</span> / $2"
  );
  const firstNumber = bottomm2.querySelector("span");
  if (firstNumber) {
    firstNumber.style.fontWeight = "bold";
  }
}

function showSlide2() {
  const slideWidth = slidess2[0].offsetWidth;
  let offset = -currentSlideIndex2 * slideWidth;
  if (visibleSlides === 1) {
    const containerWidth = sliderr2.offsetWidth;
    const centerOffset = (containerWidth - slideWidth) / 2;
    offset += centerOffset;
  }
  sliderr2.style.transform = `translateX(${offset}px)`;
  updatePagination();
}

function nextSlide2() {
  if (currentSlideIndex2 + visibleSlides >= totalSlides) {
    currentSlideIndex2 = 0;
  } else {
    currentSlideIndex2++;
  }
  showSlide2();
}

function previousSlide2() {
  if (currentSlideIndex2 === 0) {
    currentSlideIndex2 = totalSlides - visibleSlides;
  } else {
    currentSlideIndex2--;
  }
  showSlide2();
}

arrowLeftt2.addEventListener("click", previousSlide2);
arrowRightt2.addEventListener("click", nextSlide2);

function startAutoSlide() {
  setInterval(() => {
    nextSlide2();
  }, intervalDuration);
}

function checkScreenSize() {
  visibleSlides = window.innerWidth < 950 ? 1 : 3;
  showSlide2();
}

window.addEventListener("DOMContentLoaded", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

startAutoSlide();
