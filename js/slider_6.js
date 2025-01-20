import { events } from "./utillites.js";

export const slider_6 = () => {
  const button_group = document.querySelectorAll(".button-group");
  const action_aside = document.querySelectorAll(".action-aside");

  if (button_group.length === 0 || action_aside.length === 0) {
    return;
  }

  let previous;
  let count;
  let inter_id;

  const disabled = (bool) => {

    for (const index of button_group) {

      index.disabled = bool;
    }
  };

  const interval = () => {

    count--;

    if (count === 0) {

      clearInterval(inter_id);

      action_aside[previous].style.transition = "opacity 0.5s cubic-bezier(0,.67,.357,1)";
      action_aside[previous].classList.remove("has-animation");

      setTimeout(() => {

        action_aside[previous].style.transition = "none";
      }, 500);
    }
  };

  for (const [i, index] of button_group.entries()) {

    events(index, "click", () => {

      count = 9;

      clearInterval(inter_id);

      inter_id = setInterval(interval, 1000);

      disabled(true);

      setTimeout(() => {

        disabled(false);
      }, 500);

      if (previous === undefined) {

        previous = i;
        action_aside[i].style.transition = "opacity 0.5s cubic-bezier(0,.67,.357,1)";
        action_aside[i].classList.add("has-animation");

        setTimeout(() => {

          action_aside[i].style.transition = "none";
        }, 500);

        return;
      }

      action_aside[previous].style.transition = "opacity 0.5s cubic-bezier(0,.67,.357,1)";
      action_aside[previous].classList.remove("has-animation");

      setTimeout(() => {

        action_aside[previous].style.transition = "none";
        action_aside[i].style.transition = "opacity 0.5s cubic-bezier(0,.67,.357,1)";
        action_aside[i].classList.add("has-animation");

        setTimeout(() => {
          
          action_aside[i].style.transition = "none";
          previous = i;
        }, 500);
      }, 500);
    });
  }
};
