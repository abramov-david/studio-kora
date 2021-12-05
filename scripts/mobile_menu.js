const mobileMenu = document.querySelector(".header_mobile_menu");
const closeBtn = document.querySelector("#closeBtn");

const manipulate = () => {
  if (mobileMenu.classList.contains("showMobileMenu")) {
    mobileMenu.classList.remove("showMobileMenu");
    mobileMenu.classList.add("hideMobileMenu");
    closeBtn.src = "assets/logo/burger.png";
  } else {
    mobileMenu.classList.add("showMobileMenu");
    mobileMenu.classList.remove("hideMobileMenu");
    closeBtn.src = "assets/logo/close.png";
  }
};

const showMenu = () => {
  closeBtn.addEventListener("click", manipulate);
};

showMenu();
