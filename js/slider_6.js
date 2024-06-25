const slider_6 = () => {
  const button_group = document.querySelectorAll(".button-group");
  const action_aside = document.querySelectorAll(".action-aside");

  if (button_group.length === 0 || action_aside.length === 0) {
    return;
  }

  let current;
  let count;
  let nIntervId;

  const disabled = (bool) => {
    for (const index of button_group) {
      index.disabled = bool;
    }
  };

  const interval = () => {
    count--;

    if (count === 0) {
      clearInterval(nIntervId);  
      action_aside[current].classList.replace(
        "has-animation",
        "has-animation-out"
      );
    }
  };

  for (const [i, index] of button_group.entries()) {
    events(index, "click", () => {
      
      count = 10;
      nIntervId = setInterval(interval, 1000);
      disabled(true);

      if (current === undefined) {
        current = i;

        action_aside[i].classList.add("has-animation");
        setTimeout(() => {
          disabled(false);
          index.focus();
        }, 3000);

        return;
      }

      action_aside[current].classList.replace(
        "has-animation",
        "has-animation-out"
      );

      setTimeout(() => {
        action_aside[i].classList.add("has-animation");
        action_aside[i].classList.remove("has-animation-out");
      }, 1000);

      current = i;

      setTimeout(() => {
        disabled(false);
        index.focus();
      }, 3000);
    });
  }
};
