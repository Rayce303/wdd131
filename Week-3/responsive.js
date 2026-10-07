let menuButton = document.querySelector(".menu-btn");
let navThingy = document.querySelector("nav");

menuButton.addEventListener("click", function (e) {
    navThingy.classList.toggle('hidden');
    menuButton.classList.toggle('change');
});