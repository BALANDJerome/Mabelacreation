// console.log("hello");
const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const Navbar = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 300 && innerWidth > 650) {
    Navbar.style.position = "fixed";
    Navbar.style.top = "0";
  } else if (innerWidth <= 650 && window.scrollY > 521) {
    Navbar.style.position = "fixed";
    Navbar.style.top = "-221px";
    nav_btn.style.opacity = "1";
  } else {
    Navbar.style.position = "absolute";
    Navbar.style.top = "300px";
    nav_btn.style.opacity = "0";
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");
    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");
    slideActive.classList.remove("active");
  });
});
