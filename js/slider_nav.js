import { events } from "./utillites.js";

export const slider_nav = () => {
  const navbar_toggler = document.querySelector(".navbar-toggler");
  const navbar_collapse = document.querySelector(".navbar-collapse");
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  if (!navigation || !main || !navbar_toggler || !header) {
    return;
  }

  let scrollY = 0;

  let height;

  const handle_height = () => {

    height = window.innerWidth >= 576 ? 57 : 74;
  }

  handle_height();

  const handle_navigationigation = () => {

    let positive = false;

    if (window.scrollY > scrollY) {

      positive = true;
    } else if (window.scrollY < scrollY)  {

      positive = false;
    }

    scrollY = window.scrollY;

    if (scrollY < main.offsetTop + navigation.scrollHeight && scrollY > main.offsetTop && !positive) {

      Object.assign(navigation.style,{ position: "fixed", top: `-${height}px`, transition: "top 0.375s, max-height 1s", maxHeight: 0 });
    } else if (scrollY > main.offsetTop && !positive) {

      Object.assign(navigation.style,{ position: "fixed", top: 0, transition: "top 0.375s, max-height 1s", maxHeight:  navbar_toggler.classList.contains("has-collapsed") ? `${height}px` : `${height +  navbar_collapse.scrollHeight}px`});
    } else if (scrollY > main.offsetTop && positive) {

      Object.assign(navigation.style,{ position: "fixed", top: `-${height}px`, transition: "top 0.375s, max-height 1s", maxHeight: 0 });
      header.style.paddingTop = `${height}px`;
    }  else {

      Object.assign(navigation.style,{ position: "static", transition: "none", maxHeight: "" });
      header.style.paddingTop = 0;
    }
  };

  const handle_toggle_breakpoint = () => {
    
    if (window.innerWidth > 576) {
      navbar_collapse.style.maxHeight = "";
      navbar_toggler.classList.add("has-collapsed");
    }
  };

  const handle_toggle = () => {

    let max_height;
    navbar_toggler.classList.toggle("has-collapsed");
    const contains = navbar_toggler.classList.contains("has-collapsed");
    const collapse = navbar_collapse.scrollHeight;

    if (contains) {
      max_height = 0;
    }  else {
      max_height = collapse;
    }

    Object.assign(navigation.style,{ transition: contains ? "max-height 1s" : "max-height 0.5s", maxHeight: contains ? `${height}px` : `${height +  collapse}px`});
    Object.assign(navbar_collapse.style,{ transition: "max-height 0.5s", maxHeight: `${max_height}px`});
  };

  events(window, "resize", handle_height, { passive: true });
  events(window, "resize", handle_toggle_breakpoint, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
