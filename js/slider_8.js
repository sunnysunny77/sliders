import { events } from "./utillites.js";

export const slider_8 = () => {
  const navbar_toggler = document.querySelector(".navbar-toggler");
  const navbar_collapse = document.querySelector(".navbar-collapse");
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector("main");

  if (!navigation || !main || !navbar_toggler) {
    return;
  }

  let cached = null;

  const handle_navigationigation = (event) => {
    if (!cached) {
      setTimeout(() => {
        const scroll_top = window.scrollY;
        const navigation_height = navigation.getBoundingClientRect().height;
        const line = main.offsetTop;

        if (scroll_top >= line - navigation_height && window.innerWidth > 576) {
          navigation.classList.add("navigation_fixed");
          navigation.classList.remove("navigation_other");
        } else if (window.innerWidth > 576) {
          navigation.classList.add("navigation_other");
          navigation.classList.remove("navigation_fixed");
        } else if (window.innerWidth <= 576) {
          navigation.classList.remove("navigation_fixed");
          navigation.classList.remove("navigation_other");
        }
        cached = null;
      }, 150);
    }
    cached = true;
  };

  const handle_toggle_breakpoint = () => {
    
    if (window.innerWidth > 576 && !navbar_toggler.classList.contains("has-collapsed") || navbar_collapse.style.maxHeight) {
      navbar_collapse.style.maxHeight = "";
      navbar_toggler.classList.toggle("has-collapsed");
    }
  };

  const handle_toggle = (event) => {
    let max_height;
    navbar_toggler.classList.toggle("has-collapsed");

    if (navbar_toggler.classList.contains("has-collapsed")) {
      max_height = 0;
    }  else {
      max_height = navbar_collapse.scrollHeight;
    }

    navbar_collapse.style.maxHeight = `${max_height}px`;
  }

  events(window, "resize", handle_toggle_breakpoint, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
