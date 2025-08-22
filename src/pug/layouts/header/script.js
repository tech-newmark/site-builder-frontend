const burgerButton = document.querySelector(".header__burger-button");
const mobileMenu = document.querySelector(".header__mobile-menu");
const mobileMenuContent = document.querySelector(
  ".header__mobile-menu-content"
);
const closeButton = document.querySelector(".header__mobile-menu-close-button");

if (burgerButton) {
  burgerButton.addEventListener("click", () => {
    mobileMenu.style.zIndex = "40";
    mobileMenu.style.opacity = "1";
    mobileMenuContent.style.transform = "translateX(0)";
  });
}

const closeMobileMenu = () => {
  mobileMenuContent.style.transform = "translateX(-100vw)";
  setTimeout(() => {
    mobileMenu.style.opacity = "0";
    mobileMenu.style.zIndex = "-1";
  }, 300);
};

if (closeButton) {
  closeButton.addEventListener("click", () => closeMobileMenu());
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeMobileMenu();
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target === mobileMenu) {
    closeMobileMenu();
  }
});
