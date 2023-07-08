const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const cross = document.querySelector(".fa-bars")

burger.addEventListener("click", () => {
    links.classList.toggle("open");
    cross.classList.toggle("fa-x");
});
