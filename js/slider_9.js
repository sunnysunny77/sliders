import { events } from "./utillites.js";

export const slider_9 = () => {

  const counters = document.querySelectorAll(".counters");
  const overlay_image = document.querySelectorAll(".overlay-image");
  const overlay_image_close = document.querySelectorAll(".overlay-image-close");
  const prev = document.querySelector(".button-prev");
  const next = document.querySelector(".button-next");

  if (
    counters.length === 0 ||
    overlay_image === 0 ||
    overlay_image_close === 0 ||
    !prev ||
    !next
  ) {
    return;
  }

  let index = 0;
  
  const length = counters.length;

  const first = (index) => {

    counters[index].classList.add("has-fade");

    setTimeout(()=>{

      counters[index].classList.remove("has-current");
      counters[index].classList.remove("has-fade");
    },100);
  };

  const last = (index) => {

    setTimeout(()=>{

      counters[index].classList.add("has-current");
      counters[index].classList.add("has-fade");
      setTimeout(()=>{

        counters[index].classList.remove("has-fade");
      },100);
    },100);
  };

  events(prev, "click", () => {

    first(index);

    if (index === 0) {

      index = length - 1;

      last(index);

      return;
    } else {

      index--;
    }

    last(index);
  });

  events(next, "click", () => {

    first(index);

    if (index === length - 1) {

      index = 0;

      last(index);

      return;
    } else {

      index++;
    }

    last(index);
  });

  for (const [i, index] of counters.entries()) {

    events(index, "click", () => {

      overlay_image[i].classList.add("overlay-fixed");
      overlay_image[i].setAttribute("aria-expanded", true);
    });

    events(overlay_image_close[i], "click", () => {

      overlay_image[i].classList.remove("overlay-fixed");
      overlay_image[i].setAttribute("aria-expanded", false);
    });

    overlay_image[i].setAttribute("aria-expanded", false);
    index.setAttribute("aria-controls", `${overlay_image[i].id}`);
  }
};