const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slide");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function updateArrows() {
    if (currentSlideIndex === 0) {
        arrowLeft.classList.add("disabled");
    } else {
        arrowLeft.classList.remove("disabled");
    }

    if (currentSlideIndex === slides.length - 1) {
        arrowRight.classList.add("disabled");
    } else {
        arrowRight.classList.remove("disabled");
    }
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if (newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
    updateArrows();
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
    updateArrows();
}

updateArrows(); 

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);


showSlide();




