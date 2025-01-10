import { events } from "./utillites.js";

export const slider_nav = () => {
  const navbar_toggler = document.querySelector(".navbar-toggler");
  const navbar_collapse = document.querySelector(".navbar-collapse");
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector("main");

  if (!navigation || !main || !navbar_toggler ) {
    
    return;
  }

  let scrollY = 0;

  let height = window.innerWidth >= 576 ? 57 : 74;

  let collapse_height;

  let obj = {};

  const handle_collapse = (transition) => {

    navbar_toggler.classList.add("has-collapsed");
    obj.transition = transition;
    obj.maxHeight = `${height}px`;
    Object.assign(navigation.style, obj);
  };

  const handle_height = () => {

    height = window.innerWidth >= 576 ? 57 : 74;
  };

  const handle_navigationigation = () => {

    let positive = false;

    let scroll_pos =  window.scrollY;

    const collapse = navbar_toggler.classList.contains("has-collapsed") ? height : height + navbar_collapse.getBoundingClientRect().height;

    const main_top = main.offsetTop;

    if (scroll_pos > scrollY) {

      positive = true;
    } else if (scroll_pos < scrollY) {

      positive = false;
    }

    if (scroll_pos < main_top && scroll_pos > collapse && positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      main.style.marginTop = `${height}px`;
      handle_collapse("none");
    } else if (scroll_pos < main_top) {  

      obj.position = "static";
      obj.top = "initial";
      main.style.marginTop = "";
      handle_collapse("max-height 0.375s");
    } else if (scroll_pos > main_top && scroll_pos < main_top + height && positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      main.style.marginTop = `${height}px`;
      handle_collapse("none");
    } else if (scroll_pos > main_top && scroll_pos < main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      main.style.marginTop = `${height}px`;
      handle_collapse("top 0.375s, max-height 0.375s");
    } else if (scroll_pos > main_top + height && positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      handle_collapse("top 0.375s, max-height 0.375s");
      main.style.marginTop = `${height}px`;
    } else if (scroll_pos > main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = `${collapse}px`;
      main.style.marginTop = `${height}px`;
    } 

    Object.assign(navigation.style, obj);

    scrollY = scroll_pos;
  };

  const handle_toggle = () => {

    navbar_toggler.classList.toggle("has-collapsed");
    collapse_height = navbar_toggler.classList.contains("has-collapsed") ? height : collapse_height = height + navbar_collapse.getBoundingClientRect().height;
    obj.transition = "max-height 0.375s";
    obj.maxHeight = `${collapse_height}px`;
    Object.assign(navigation.style, obj);
  };

  events(window, "resize", handle_height, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
