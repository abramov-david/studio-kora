const header = document.querySelector(".header_navbar");
const mobileHeader = document.querySelector(".header_mobile_navbar");
const links = header.querySelector("ul");
const navLogo = document.querySelector(".navbarLogo");
const mobileNavLogo = document.querySelector(".mobileNavbarLogo");
const navPhone = document.querySelector(".navPhone");
const closeButton = document.querySelector("#closeBtn");

window.onscroll = function () {
  let top = window.scrollY;

  if (top >= 1) {
    /* MAIN NAV */
    header.classList.add("header_navbar_scroll");
    navLogo.src = "./assets/logo/Vector_black.png";
    links.classList.remove("navLinks");
    links.classList.add("navLinks-scroll");
    navPhone.classList.remove("navPhone");
    navPhone.classList.add("navPhone-scroll");

    /* MOBILE NAV */
    mobileHeader.classList.add("header_mobile_navbar_scroll");
    mobileNavLogo.src = "./assets/logo/Vector_black.png";
  } else {
    /* MAIN NAV */
    header.classList.remove("header_navbar_scroll");
    navLogo.src = "./assets/logo/Vector.png";
    links.classList.add("navLinks");
    links.classList.remove("navLinks-scroll");
    navPhone.classList.add("navPhone");
    navPhone.classList.remove("navPhone-scroll");

    /* MOBILE NAV */
    mobileHeader.classList.remove("header_mobile_navbar_scroll");
    mobileNavLogo.src = "./assets/logo/Vector.png";
  }
};
