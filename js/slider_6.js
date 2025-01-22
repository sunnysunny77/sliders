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

  const transition = "transform 0.5s";

  const init = (transition_param) => {

    for (const index of action_aside) {

      Object.assign(index.style, {

        transition: transition_param,
        transform: "",
      });
    };
  };

  const transform_item = (transition_param) => {

    for (const index of action_aside) {

      Object.assign(index.style, {

        transition: transition_param,
        transform: `translateX(-${100 * count}%)`,
      });
    };
  };

  const interval = () => {

    inter_count--;

    if (inter_count === 0) {

        service.value = -1;
        clearInterval(inter_id);
        init(transition);
    }
  };

  events(service, "input", (event) => {

    inter_count = 9;

    clearInterval(inter_id);

    inter_id = setInterval(interval, 1000);

    count = event.target.value;

    if (count == -1) {
      
      init(transition);
    } else {

      transform_item(transition);
    }
  });

  events(window, "resize", () => {

    if (window.innerWidth < 768) {

      init("none");
    } else {

      transform_item("none");
    }

  }, { passive: true });
};
