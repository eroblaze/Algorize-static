const mobileNavOpener = document.querySelector(".mobile_nav_opener");
const desktopNavOpener = document.querySelector(".mobile_nav_opener");
const hamburger = document.querySelector(".hamburger");
const elem3 = document.querySelectorAll(".nav__list__content__header");

mobileNavOpener.addEventListener("click", () => {
  document.querySelector("#header__nav__list__contents--mobile")?.classList.toggle("open");
  document.querySelector(".mobile_nav_opener_dropdown_icon")?.classList.toggle("rotate-arrow");
});

hamburger.addEventListener("click", () => {
  document.querySelector(".header__nav").classList.toggle("header__nav--mobile-open");
});
console.log("working");

elem3.forEach((el) => {
  el.addEventListener("click", () => {
    el.parentNode.querySelector("nav").classList.toggle("open");
    el.querySelector("svg").classList.toggle("rotate-arrow");
  });
});
