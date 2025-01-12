import { events, get_position } from "./utillites.js";

const has_move_init = (index) => {

  let scrollY = window.scrollY + window.innerHeight;

  if (scrollY > get_position(index)) {
  
    index.classList.add("has-bottom");
  } else if (get_position(index) >  window.innerHeight) {

    index.classList.replace("has-bottom", "has-move") || index.classList.add("has-move");
  }
};

export const slider_8 = () => {

    const obj = document.querySelectorAll(".has-test");

    if (obj.length === 0) {

      return;
    }

    events(window, "scroll", () => {

      for (const index of obj) {

          has_move_init(index);
      }
    });
};