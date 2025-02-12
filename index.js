// console.log("hello");
const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const Navbar = document.querySelector("nav");
let navBtnIn = true;

const NavbarStyle = (a, b) => {
  Navbar.style.position = a;
  Navbar.style.top = b;
};

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 300 && innerWidth > 650) {
    NavbarStyle("fixed", "0");
  } else if (innerWidth <= 650 && window.scrollY > 521 && navBtnIn == false) {
    nav_btn.style.top = "209px";
    navBtnIn = false;
  } else if (innerWidth <= 650 && window.scrollY > 521 && navBtnIn == true) {
    NavbarStyle("fixed", "-221px");
    nav_btn.style.top = "209px";
  } else {
    NavbarStyle("absolute", "300px");
    nav_btn.style.top = "-360px";
    navBtnIn = true;
  }
});
nav_btn.addEventListener("click", () => {
  if (navBtnIn == true) {
    Navbar.style.top = "0";
    navBtnIn = false;
  } else {
    Navbar.style.top = "-221px";
    navBtnIn = true;
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
