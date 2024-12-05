import { events } from "./utillites.js";

export const slider_9 = () => {

  const counters = document.querySelectorAll(".counters");
  const prev = document.querySelector(".button-prev");
  const next = document.querySelector(".button-next");

  if (
    counters.length === 0 ||
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
};