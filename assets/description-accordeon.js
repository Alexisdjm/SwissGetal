const accordeon = document.getElementById("container-acc");
const content = document.getElementById("content-acc");
const label = document.getElementById("label-acc");

accordeon.addEventListener("click", () => {
    content.classList.toggle("grow");
    label.classList.toggle("toggle-icon");
})