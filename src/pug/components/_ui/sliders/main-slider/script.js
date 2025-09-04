import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sliders = document.querySelectorAll(".main-slider");

if (sliders.length) {
  const breakpoints = (slider) => {
    if (slider.classList.contains("staff-preview-slider")) {
      return {
        680: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      };
    } else if (slider.classList.contains("reviews-slider")) {
      return {
        680: {
          slidesPerView: slider.classList.contains("--max-slides-2")
            ? 1
            : slider.classList.contains("--max-slides-3")
              ? 2
              : 1,
          spaceBetween: slider.classList.contains("--max-slides-3") ? 32 : 20,
        },
        1024: {
          slidesPerView: slider.classList.contains("--max-slides-2")
            ? 2
            : slider.classList.contains("--max-slides-3")
              ? 3
              : 1,
          spaceBetween: slider.classList.contains("--max-slides-2")
            ? 64
            : slider.classList.contains("--max-slides-3")
              ? 32
              : 20,
        },
      };
    } else if (slider.classList.contains("gallery-slider")) {
      return {
        680: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      };
    }
  };

  sliders.forEach((slider) => {
    const btnNext = slider.parentNode.querySelector(".swiper-button-next");
    const btnPrev = slider.parentNode.querySelector(".swiper-button-prev");
    const pagination = slider.parentNode.querySelector(".swiper-pagination");

    new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: slider.classList.contains("--js--auto-fill") ? "auto" : 1, // start from mobile
      spaceBetween: 20,
      centeredSlidesBounds: true,

      breakpoints: !slider.classList.contains("--js--auto-fill")
        ? breakpoints(slider)
        : null,

      navigation: {
        nextEl: btnNext ? btnNext : null,
        prevEl: btnPrev ? btnPrev : null,
      },

      pagination: {
        el: pagination ? pagination : null,
        dynamicBullets: pagination && pagination.dataset.dynamic ? true : false,
        clickable: true,
      },
    });
  });
}
