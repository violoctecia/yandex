// const runningLine = document.querySelector('.running_line');
// const wrapper = runningLine.querySelector('.first_line');

// function cloneWrapper() {
//     const clone = wrapper.cloneNode(true);
//     runningLine.appendChild(clone);
//     clone.addEventListener('animationiteration', cloneWrapper); // Слушаем событие окончания анимации и клонируем элемент снова
// }

// cloneWrapper();

const wrapper = document.querySelector(".running_line_wrapper");
const paragraphs = wrapper.querySelectorAll("p");

paragraphs.forEach((paragraph, index) => {
  if (index !== paragraphs.length - 1) {
    const dot = document.createElement("span");
    dot.innerText = "●";
    dot.classList.add("dot");
    paragraph.insertAdjacentElement("afterend", dot);
  }
});

