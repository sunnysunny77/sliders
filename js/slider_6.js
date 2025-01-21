import { events } from "./utillites.js";

export const slider_6 = () => {
  const action_aside = document.querySelectorAll(".action-aside");
  const button_group = document.querySelectorAll(".button-group");

  if (
    action_aside.length === 0 ||
    button_group.length === 0 
  ) {
    return;
  };

  let count;

  let inter_count;

  let inter_id;

  const init = () => {

    for (const index of action_aside) {

      index.style.transform = "";
    };
  };

  const transform_item = () => {

    for (const index of action_aside) {

      index.style.transform = `translateX(-${100 * count}%)`;
    };
  };

  const interval = () => {

    inter_count--;

    if (inter_count === 0) {

        clearInterval(inter_id);
        init();
    }
  };

  const disabled = (event) => {

    event.target.disabled = "true";

    setTimeout(() => {

      event.target.disabled = "";
    }, 500);
  };

  events(button_group[0], "click", (event) => {

      inter_count = 9;

      clearInterval(inter_id);

      inter_id = setInterval(interval, 1000);

      count = 0;

      disabled(event);

      transform_item();
  });

  events(button_group[1], "click", (event) => {

    inter_count = 9;

    clearInterval(inter_id);

    inter_id = setInterval(interval, 1000);

    count = 1;
  
    disabled(event);
  
    transform_item();
  });

  events(button_group[2], "click", (event) => {

    inter_count = 9;

    clearInterval(inter_id);

    inter_id = setInterval(interval, 1000);

    count = 2;
  
    disabled(event);
  
    transform_item();
  });

  events(button_group[3], "click", (event) => {

    inter_count = 9;

    clearInterval(inter_id);

    inter_id = setInterval(interval, 1000);

    count = 3;
  
    disabled(event);
  
    transform_item();
  });

  events(window, "resize", init, { passive: true });
};
