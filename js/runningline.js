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

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}