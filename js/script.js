const btn = document.querySelector(".sunnyside__btn-js");
const menu = document.querySelector(".sunnyside__list-js");
const hamburger = document.querySelector(".sunnyside__hamburger-js");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("sunnyside__list-hidden");
  menu.classList.contains("sunnyside__list-hidden")
    ? btn.setAttribute("aria-expanded", "false")
    : btn.setAttribute("aria-expanded", "true");
});
