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

// Carousel accueil =>
const buttons = document.querySelectorAll(".btn");
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

// Carousel pages =>
const radios = document.querySelectorAll("input[type='radio']");
const imgRadio = document.querySelectorAll(".slide");

radios.forEach((radio) =>
  radio.addEventListener("click", (e) => {
    if (e.target.name == "imgCarou") {
      return;
    } else {
      changeImg(e.target.name, e.target.id);
    }
  })
);
imgRadio.forEach((img) => {
  img.addEventListener("click", (e) => {
    if (e.target.className == "carou" || e.view.window.innerWidth < 650) {
      return;
    } else {
      liId = e.target.parentElement.id;
      if (liId == e.target.parentElement.parentElement.children.length) {
        liId = 1;
      } else {
        liId++;
      }
      changeImg(e.target.parentElement.classList[1], liId);
    }
  });
  // =====================================

  img.addEventListener("touchstart", handleTouchStart, false);
  img.addEventListener("touchmove", handleTouchMove, false);
  var xDown = null;
  function handleTouchStart(e) {
    xDown = e.touches[0].clientX;
  }
  function handleTouchMove(e) {
    if (!xDown || e.target.className == "carou") {
      return;
    }
    var xUp = e.touches[0].clientX;
    if (xDown > xUp) {
      liId = e.target.parentElement.id;
      if (liId == e.target.parentElement.parentElement.children.length) {
        liId = 1;
      } else {
        liId++;
      }
      changeImg(e.target.parentElement.classList[1], liId);
    } else {
      liId = e.target.parentElement.id;
      if (liId == 1) {
        liId = e.target.parentElement.parentElement.children.length;
      } else {
        liId--;
      }
      changeImg(e.target.parentElement.classList[1], liId);
    }
    xDown = null;
  }

  // ==========================================
});

const changeImg = (name, id) => {
  const slides = document.querySelectorAll(`.${name}`);
  slides.forEach((li) => {
    li.classList.remove("active");
    if (li.id == id) {
      li.classList.add("active");
      const checkRadio = document.querySelectorAll(`input[name="${name}"]`);
      checkRadio.forEach((radio) => {
        if (radio.id == id) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      });
    }
  });
};

// InnerHTML Tissus =>

const CreatTissus = (tissu, x) => {
  const Tissus = document.querySelectorAll(`div.${tissu}`);

  Tissus.forEach((tis) => {
    for (i = 1; i < x + 1; i++) {
      tis.innerHTML += `<img class="imgTissus" src="./assets/img/Tissus/${tissu}/${tissu}_${i}.jpg" alt="Image tissu ${tissu}">`;
      // if (i == 4) {
      //   tis.children[4].style.background = "red";
      // }
    }
    // tis.innerHTML += `<button id="creatButton">></button>`;
  });
};

const TitleTissus = document.querySelectorAll("h3");
let tissusList = [];
let tissusListSort = [];

TitleTissus.forEach((title) => {
  tissusList.push({
    className: title.parentElement.className,
    id: parseInt(title.id),
  });
});

tissusList.forEach((tissu) => {
  if (!tissusListSort.some((a) => a == tissu.className)) {
    tissusListSort.push(tissu.className);
    CreatTissus(tissu.className, tissu.id);
  }
});

// const creatButton = document.querySelectorAll("#creatButton");

// creatButton.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log('ok');
//   });
// });

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
      img.style.transform = "scale(3)";
      img.style.cursor = "zoom-out";
      img.classList.add("zoom");
    } else {
      removeClass(img);
    }
  });
});

// Apparition section pages

const divPics1 = document.querySelector(".Item1_pics");
const divText1 = document.querySelector(".Item1_text");
const divPics2 = document.querySelector(".Item2_pics");
const divText2 = document.querySelector(".Item2_text");
const divPics3 = document.querySelector(".Item3_pics");
const divText3 = document.querySelector(".Item3_text");
const divPics4 = document.querySelector(".Item4_pics");
const divText4 = document.querySelector(".Item4_text");

window.addEventListener("load", () => {
  if (!!divPics1) {
    divPics1.style.left = "0";
    divText1.style.left = "0";
  }
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 300 && !!divPics2 && visualViewport.width > 1000) {
    divPics2.style.left = "0";
    divText2.style.left = "0";
  }
  if (window.scrollY > 700 && !!divPics3 && visualViewport.width > 1000) {
    divPics3.style.left = "0";
    divText3.style.left = "0";
  }
  if (window.scrollY > 1100 && !!divPics4 && visualViewport.width > 1000) {
    divPics4.style.left = "0";
    divText4.style.left = "0";
  }
});
