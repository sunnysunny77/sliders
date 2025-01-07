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

  let obj = {};

  const handle_height = () => {

    height = window.innerWidth >= 576 ? 57 : 74;
  };

  handle_height();

  const handle_navigationigation = () => {

    let positive = false;

    const collapse = navbar_toggler.classList.contains("has-collapsed") ? height : height + navbar_collapse.offsetHeight;

    if (window.scrollY > scrollY) {

      positive = true;
    } else if (window.scrollY < scrollY)  {

      positive = false;
    }

    if (window.scrollY  < main.offsetTop + navigation.offsetHeight && window.scrollY  > main.offsetTop && !positive) {

      obj.position = "fixed";
      obj.top = `-${collapse}px`;
      obj.transition = "top 0.375s, max-height 1s";
      obj.maxHeight = "0px";
    } else if (window.scrollY  > main.offsetTop && !positive) {

      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s, max-height 1s";
      obj.maxHeight = `${collapse}px`;

    } else if (window.scrollY  > main.offsetTop && positive) {

      header.style.paddingTop = `${collapse}px`;
      obj.position = "fixed";
      obj.top = `-${collapse}px`;
      obj.transition = "top 0.375s, max-height 1s";
      obj.maxHeight = "0px";
    }  else {

      header.style.paddingTop = "";
      obj.position = "static";
      obj.top = "initial";
      obj.transition = "max-height 1s";
      obj.maxHeight = `${collapse}px`;
    }

    Object.assign(navigation.style, obj);

    scrollY = window.scrollY;
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
    let navigation_obj = {};
    let navbar_collapse_obj = {};

    if (contains) {
      max_height = 0;
    }  else {
      max_height = collapse;
    }

    navigation_obj.transition = contains ? "max-height 1s" : "max-height 0.5s";
    navigation_obj.maxHeight = contains ? `${height}px` : `${height + collapse}px`;
    navbar_collapse_obj.transition = "max-height 0.5s"; 
    navbar_collapse_obj.maxHeight = `${max_height}px`;
    Object.assign(navigation.style, navigation_obj);
    Object.assign(navbar_collapse.style, navbar_collapse_obj);
  };

  events(window, "resize", handle_height, { passive: true });
  events(window, "resize", handle_toggle_breakpoint, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
