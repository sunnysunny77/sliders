import { events } from "./utillites.js";

export const slider_6 = () => {
  const action_aside = document.querySelectorAll(".action-aside");
  const service = document.querySelector("#service");

  if (
    action_aside.length === 0 ||
    !service 
  ) {
    return;
  };

  let count;

  let inter_count;

  let inter_id;

  const init = () => {

    service.value = -1;

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

  events(service, "input", (event) => {

    inter_count = 9;

    clearInterval(inter_id);

    inter_id = setInterval(interval, 1000);

    count = event.target.value;

    if (count == -1) {
      
      init();
    } else {

      transform_item();
    }
  });

  events(window, "resize", init, { passive: true });
};
