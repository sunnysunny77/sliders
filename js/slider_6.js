const slider_6 = () => {
  const button_group = document.querySelectorAll(".button-group");
  const action_aside = document.querySelectorAll(".action-aside");

  if (button_group.length === 0 || action_aside.length === 0) {
    return;
  }
 
  let current;
  let count;

  const disabled = (bool) => {
    for (const index of button_group) {
      index.disabled = bool;
    }
  }

  setInterval(() => {
    count--;

    if (count === 0) {
      action_aside[current].classList.replace("has-animation", "has-animation-out");
    }
  }, 1000);

  for (const [i, index] of button_group.entries()) {
    events(index, "click", () => {

      count = 17;

      disabled(true);

      if (current === undefined) {
        current = i;

        action_aside[i].classList.add("has-animation");
        setTimeout(() => {
          disabled(false);
        }, 3000);

        return;
      }

      action_aside[current].classList.replace("has-animation", "has-animation-out");

      setTimeout(() => {
        action_aside[i].classList.add("has-animation");
        action_aside[i].classList.remove("has-animation-out");
      }, 1000);

      current = i;

      setTimeout(() => {
        disabled(false);
      }, 3000);
    });
  }
};
