const MAX_VALUE = 5;
const MAX_WIDTH = 100;

const texts = document.querySelectorAll(".review-card__text");
const ratings = document.querySelectorAll(".rating");

texts.forEach((text) => {
  text.style.position = "relative";
  const clone = text.cloneNode(true);
  clone.style.display = "block";
  clone.style.position = "absolute";
  clone.style.visibility = "hidden";
  clone.style.height = "auto";
  clone.style.maxHeight = "none";
  clone.style.overflow = "visible";
  clone.style.WebkitLineClamp = "unset";
  clone.style.WebkitBoxOrient = "initial";
  clone.style.width = text.offsetWidth + "px";

  document.body.appendChild(clone);
  const isOverflowing = clone.clientHeight > text.clientHeight;
  clone.remove();
  const button = text
    .closest(".review-card__content")
    ?.querySelector(".review-card__button");
  if (button && !isOverflowing) {
    button.style.display = "none";
  }
});

ratings.forEach((rating) => {
  const value =
    parseFloat(rating.dataset.value) >= 0
      ? parseFloat(rating.dataset.value)
      : MAX_VALUE;
  const stars = rating.querySelectorAll("svg");
  const fullStarsCount = Math.floor(value);
  const partialStarRatio = value - fullStarsCount;

  if (stars.length) {
    const setClipRect = (item, value) => {
      item.setAttribute("width", value);
    };
    stars.forEach((star, index) => {
      const clipRect = star.querySelector("clipPath rect");
      if (index < fullStarsCount) {
        setClipRect(clipRect, MAX_WIDTH);
      } else if (index === fullStarsCount && partialStarRatio > 0) {
        setClipRect(clipRect, partialStarRatio * MAX_WIDTH);
      } else {
        setClipRect(clipRect, 0);
      }
    });
  }
});
