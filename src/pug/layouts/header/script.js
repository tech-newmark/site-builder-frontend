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
  };

  const onOverlayClickHandler = (evt) => {
    if (evt.target.classList.contains("header__mobile-menu"))
      onClickCloseMenu();
  };

  const onEscClickHandler = (evt) => {
    if (evt.key === "Escape" || evt.code === 27) onClickCloseMenu();
  };

  const onClickCloseMenu = () => {
    tl.reverse();
    document.removeEventListener("click", onOverlayClickHandler);
    window.removeEventListener("keydown", onEscClickHandler);
  };

  closer.addEventListener("click", onClickCloseMenu);
  opener.addEventListener("click", onClickOpenMenu);
}
