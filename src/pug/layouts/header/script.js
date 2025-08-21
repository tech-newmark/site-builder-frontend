const burgerButton = document.querySelector(".header__burger-button");
const mobileMenu = document.querySelector(".header__mobile-menu");
const mobileMenuContent = document.querySelector(
  ".header__mobile-menu-content"
);
const closeButton = document.querySelector(".header__mobile-menu-close-button");

burgerButton.addEventListener("click", () => {
  mobileMenu.style.zIndex = "40";
  mobileMenu.style.opacity = "1";
  mobileMenuContent.style.transform = "translateX(0)";
});

closeButton.addEventListener("click", () => {
  console.log("click");
  mobileMenuContent.style.transform = "translateX(-100vw)";
  setTimeout(() => {
    mobileMenu.style.opacity = "0";
    mobileMenu.style.zIndex = "-1";
  }, 300);
});
