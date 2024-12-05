import { events } from "./utillites.js";

export const slider_9 = () => {

  const counters = document.querySelectorAll(".counters");
  const inner = document.querySelector(".inner-swap");
  const prev = document.querySelector(".button-prev");
  const next = document.querySelector(".button-next");

  if (
    counters.length === 0 ||
    !inner ||
    !prev ||
    !next
  ) {
    return;
  }

  let index = 0;
  const length = counters.length;

  events(prev, "click", () => {

    const current = index;

    counters[current].classList.add("has-fade");

    setTimeout(()=>{

      counters[current].classList.remove("has-current");
      counters[current].classList.remove("has-fade");
    },100);

    index--;

    if (index === - 1) {

      index = length - 1;
    }

    setTimeout(()=>{

      counters[index].classList.add("has-current");
      counters[index].classList.add("has-fade");
      setTimeout(()=>{

        counters[index].classList.remove("has-fade");
      },100);
    },100);
  });

  events(next, "click", () => {

    const current = index;

    counters[current].classList.add("has-fade");

    setTimeout(()=>{

      counters[current].classList.remove("has-current");
      counters[current].classList.remove("has-fade");
    },100);

    index++;

    if (index === length) {

      index = 0;
    }

    setTimeout(()=>{

      counters[index].classList.add("has-current");
      counters[index].classList.add("has-fade");
      setTimeout(()=>{

        counters[index].classList.remove("has-fade");
      },100);
    },100);
  });
};