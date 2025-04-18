import { events } from "./utillites.js";

export const slider_nav = () => {
  const navbar_toggler_0 = document.querySelectorAll(".navbar-toggler")[0];
  const navbar_toggler_1 = document.querySelectorAll(".navbar-toggler")[1];
  const navigation_0 = document.querySelectorAll(".navigation")[0];
  const navigation_1 = document.querySelectorAll(".navigation")[1];
  const footer = document.querySelector("footer");
  const main = document.querySelector("main");

  if (!navigation_0 || !navigation_1 || !footer || !main || !navbar_toggler_0 || !navbar_toggler_1 ) {
    
    return;
  }

  let scrollY = 0;

  let positive = false;

  const handle_toggle_0 = () => {

    navbar_toggler_0.classList.toggle("has-collapsed");
    navigation_0.classList.toggle("has-collapsed");
  };

  const handle_toggle_1 = () => {

    navbar_toggler_1.classList.toggle("has-collapsed");
    navigation_1.classList.toggle("has-collapsed");
  };

  const handle_navigationigation = () => {

    const height = 83;

    const top = main.offsetTop;

    const scroll_pos = window.scrollY;

    if (scroll_pos < top) {

      navigation_1.classList.remove("has-float");
      navigation_1.classList.remove("has-positive");
      navigation_1.classList.remove("has-negative");
      navbar_toggler_1.classList.remove("has-collapsed");
      navigation_1.classList.remove("has-collapsed");
    } else if (scroll_pos > top && scroll_pos < (top + height)) {

      navigation_1.classList.add("has-float");
      navigation_1.classList.remove("has-positive");
      navigation_1.classList.remove("has-negative");
      navbar_toggler_1.classList.remove("has-collapsed");
      navigation_1.classList.remove("has-collapsed");
    } else if ((scroll_pos > (top + height) && positive) || (scroll_pos > (footer.offsetTop - height))) {

      navigation_1.classList.remove("has-float");
      navigation_1.classList.add("has-positive");
      navigation_1.classList.remove("has-negative");
      navbar_toggler_1.classList.remove("has-collapsed");
      navigation_1.classList.remove("has-collapsed");
    } else if (scroll_pos > (top + height) && !positive) {

      navigation_1.classList.remove("has-float");
      navigation_1.classList.remove("has-positive");
      navigation_1.classList.add("has-negative");
    };

    if (scroll_pos > scrollY) {

      positive = true;
    } else if (scroll_pos < scrollY) {

      positive = false;
    }
    scrollY = scroll_pos;
  };

  events(navbar_toggler_0, "click", handle_toggle_0);
  events(navbar_toggler_1, "click", handle_toggle_1);
  events(window, "scroll", handle_navigationigation, { passive: true });
};
