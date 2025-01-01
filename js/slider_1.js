import { events } from "./utillites.js";

export const slider_1 = () => {
  const slider_items = document.querySelectorAll(".slider-item");
  const slider_next = document.querySelectorAll(".slider-next");
  const slider_next_sm = document.querySelector(".slider-next-md");
  const slider_next_xl = document.querySelector(".slider-next-lg");
  const slider_container = document.querySelector(".slider-container");
  const slider_body = document.querySelectorAll(".slider-body");

  if (
    slider_items.length === 0 ||
    !slider_next ||
    !slider_next_sm ||
    !slider_next_xl ||
    !slider_container ||
    !slider_body
  ) {
    return;
  }

  let count = 0;

  const calc_min_height = () => {
    let min_height = [];

    for (const index of slider_body) {
      index.style.minHeight = "";
      min_height.push(index.getBoundingClientRect().height + 1);
    }

    const largest = Math.round(Math.max(...min_height));

    for (const index of slider_body) {
      index.style.minHeight = `${largest}px`;
    }

    slider_container.style.minHeight = `${largest}px`;
  };

  for (const [i, index] of slider_items.entries()) {
    index.style.transform = `translateX(${i * 100}%)`;
  }

  calc_min_height();

  for (const index of slider_next) {
    events(index, "click", (event) => {
      event.target.disabled = "true";
      count++;

      for (const [i, index] of slider_items.entries()) {

        if (count === slider_items.length - 2) {

          Object.assign(slider_next_xl.style,{ transitionDuration: "0.5s", right: "calc(((100% + 34px) / 3) - 26px)"});
        }

        if (count === slider_items.length - 1) {

          Object.assign(slider_next_sm.style,{ transitionDuration: "0.5s", right: "calc(((100% + 34px) / 2) - 26px)"});
          Object.assign(slider_next_xl.style,{ transitionDuration: "0.5s", right: "calc(((100% + 34px) / 1.5) - 26px)"});
        }
        index.classList.add("slider_1-item-has-opacity");
        Object.assign(index.style,{ transition: "transform 0.5s ease-in-out", transform: `translateX(${100 * (i - count)}%)`});
        setTimeout(() => {
          index.classList.remove("slider_1-item-has-opacity");
          event.target.disabled = "";
        }, 500);
      }

      if (count === slider_items.length) {

        Object.assign(slider_next_sm.style,{ transitionDuration: "0.375s", right: "-26px"});
        Object.assign(slider_next_xl.style,{ transitionDuration: "0.425s", right: "-26px"});
        for (const [i, index] of slider_items.entries()) {
          Object.assign(index.style,{ transition: "transform 0.5s ease-in-out", transform: `translateX(${i * 100}%)`});
        }
    
        count = 0;
      }
    });
  }

  events(
    window,
    "resize",
    () => {
      calc_min_height();
    },
    { passive: true }
  );
};
