"use strict"

const menu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu__close-btn")
menu.addEventListener("click", () => {
    mobileMenu.classList.add("open")
});

closeBtn.addEventListener('click', () =>  {
 mobileMenu.classList.remove('open')
})