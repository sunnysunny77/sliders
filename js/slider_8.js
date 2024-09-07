import { events, get_position } from "./utillites.js";

const has_move_init = (index) => {

  if (get_position(index) >  window.innerHeight) {

    index.classList.add("has-move");

    let scrollY = window.scrollY + window.innerHeight;

    if (scrollY > get_position(index)) {

      index.classList.add("has-bottom");
    }
  }
};

export const slider_8 = () => {

    const obj = document.querySelectorAll(".has-test");

    if (obj.length === 0) {

      return;
    }

    for (const index of obj) {

        events(window, "scroll", () => {

          has_move_init(index);
        });

        events(window, "resize", () => {

          index.classList.remove("has-move");
          index.classList.remove("has-bottom");
          has_move_init(index);
        });
    }
};