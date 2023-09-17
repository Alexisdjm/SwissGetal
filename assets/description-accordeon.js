const accordeon = document.getElementById("container-acc");
const content = document.getElementById("content-cc");

accordeon.addEventListener("click", () => {
    console.log('click')
    content.classList.toggle("grow")
})