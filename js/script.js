const menu = document.querySelector(".sunnyside__list-js");
const button = document.querySelector(".sunnyside__hamburger-js");

button.addEventListener("click", () => {
  menu.classList.toggle("sunnyside__list-hidden");
});
