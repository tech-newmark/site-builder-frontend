const LAPTOP_WIDTH = 1024;
let wasMobile = window.innerWidth < LAPTOP_WIDTH;

import { gsap } from "gsap";

const opener = document.querySelector(".header__action-button--burger");
const closer = document.querySelector(".header__action-button--close");
const menu = document.querySelector(".header__mobile-menu");

if (opener && closer && menu) {
  const tl = gsap.timeline().pause();

  tl.fromTo(
    ".header__mobile-menu",
    { opacity: 0 },
    { display: "block", opacity: 1, duration: 0.3 }
  );
  tl.fromTo(
    ".header__mobile-menu-content",
    { x: "-100vw", opacity: 0 },
    { opacity: 1, x: 0, duration: 0.3 },
    "-=.2"
  );

  const onClickOpenMenu = () => {
    tl.play();
    document.addEventListener("click", onOverlayClickHandler);
    window.addEventListener("keydown", onEscClickHandler);
    window.addEventListener("resize", handleResize);
  };

  const closeMenu = () => {
    tl.reverse();
    document.removeEventListener("click", onOverlayClickHandler);
    window.removeEventListener("keydown", onEscClickHandler);
    window.removeEventListener("resize", handleResize);
  };

  const onClickCloseMenu = () => {
    closeMenu();
  };

  const onEscClickHandler = (evt) => {
    if (evt.key === "Escape") {
      closeMenu();
    }
  };

  const onOverlayClickHandler = (evt) => {
    if (evt.target.classList.contains("header__mobile-menu")) {
      closeMenu();
    }
  };

  const handleResize = () => {
    const isMobile = window.innerWidth < LAPTOP_WIDTH;
    if (wasMobile && !isMobile) {
      closeMenu();
    }
    wasMobile = isMobile;
  };

  closer.addEventListener("click", onClickCloseMenu);
  opener.addEventListener("click", onClickOpenMenu);
}
