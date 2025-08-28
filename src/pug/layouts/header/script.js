// const burgerButton = document.querySelector(".header__action-button--burger");
// const mobileMenu = document.querySelector(".header__mobile-menu");
// const mobileMenuContent = document.querySelector(
//   ".header__mobile-menu-content"
// );
// const closeButton = document.querySelector(".header__action-button--close");

// const openMobileMenu = () => {
//   mobileMenu.style.display = "block";
//   mobileMenu.style.opacity = "1";
//   mobileMenu.style.zIndex = "40";
//   mobileMenuContent.style.transform = "translateX(0)";
// };

// const closeMobileMenu = () => {
//   mobileMenuContent.style.transform = "translateX(-100vw)";
//   setTimeout(() => {
//     mobileMenu.style.display = "none";
//     mobileMenu.style.opacity = "0";
//     mobileMenu.style.zIndex = "-1";
//   }, 300);
// };

// if (burgerButton) {
//   burgerButton.addEventListener("click", () => openMobileMenu());
// }

// if (closeButton) {
//   closeButton.addEventListener("click", () => closeMobileMenu());
// }

// document.addEventListener("keydown", (evt) => {
//   if (evt.key === "Escape") {
//     closeMobileMenu();
//   }
// });

// document.addEventListener("click", (evt) => {
//   if (evt.target === mobileMenu) {
//     closeMobileMenu();
//   }
// });
