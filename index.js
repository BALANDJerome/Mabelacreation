// Navbar =>
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

// Carousel =>
const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");
const pic = document.querySelectorAll(".carou");
const inpPics = document.getElementsByName("imgCarou");
let indCheck = 1;
let interval;

const changePic = (namePic) => {
  pic.forEach((divs) => {
    divs.parentElement.classList.remove("active");
    if (divs.id == namePic) divs.parentElement.classList.add("active");
  });
};

inpPics.forEach((radio) => {
  radio.addEventListener("click", () => {
    indCheck = radio.id.slice(4) - 1;
    changePic(radio.id);
    clearInterval(interval);
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    inpPics.forEach((check) => {
      check.checked = false;
    });
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    indCheck += calcNextSlide;
    if (indCheck < 0) indCheck = inpPics.length - 1;
    if (indCheck >= inpPics.length) indCheck = 0;
    inpPics[indCheck].checked = true;
    changePic(inpPics[indCheck].id);
    clearInterval(interval);
  });
});

const picsChecked = () => {
  inpPics.forEach((check) => {
    check.checked = false;
  });
  indCheck++;
  if (indCheck >= inpPics.length) indCheck = 0;
  inpPics[indCheck].checked = true;
  changePic(inpPics[indCheck].id);
};
if (
  document.location.href.slice(
    document.location.href.length - 10,
    document.location.href.length
  ) == "index.html"
) {
  interval = setInterval(() => {
    picsChecked();
  }, 3000);
}

// Zoom tissu =>
const zoomTissus = document.querySelectorAll(".imgTissus");

zoomTissus.forEach((img) => {
  const removeClass = () => {
    zoomTissus.forEach((img) => {
      if (img.className) {
        img.style.transform = "none";
        img.style.cursor = "zoom-in";
        img.classList.remove("zoom");
      }
    });
  };
  img.addEventListener("click", () => {
    if (img.className === "imgTissus") {
      removeClass(img);
      img.style.transform = "scale(1.8)";
      img.style.cursor = "zoom-out";
      img.classList.add("zoom");
    } else {
      removeClass(img);
    }
  });
});
