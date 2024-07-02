const elem = document.querySelector(".mobile_nav_opener");

elem.addEventListener("click", () => {
  document.querySelector(".header__nav__list__contents").classList.toggle("open");
  document.querySelector(".mobile_nav_opener_dropdown_icon").classList.toggle("rotate-arrow");
});
console.log("working");
