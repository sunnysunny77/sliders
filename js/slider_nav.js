import { events } from "./utillites.js";

export const slider_nav = () => {
  const navbar_toggler = document.querySelector(".navbar-toggler");
  const navbar_collapse = document.querySelector(".navbar-collapse");
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector("main");
  const body = document.querySelector("body");

  if (!navigation || !main || !navbar_toggler || !body ) {
    
    return;
  }

  let scrollY = 0;

  let height = window.innerWidth >= 576 ? 57 : 74;

  let collapse;

  let obj = {};

  const handle_toggle = () => {

    navbar_toggler.classList.toggle("has-collapsed");
    collapse = navbar_toggler.classList.contains("has-collapsed") ? height : navigation.scrollHeight;
    obj.transition = "max-height 0.375s";
    obj.maxHeight = `${collapse}px`;
    Object.assign(navigation.style, obj);
  };

  const handle_collapse = (transition, height_param) => {

    navbar_toggler.classList.add("has-collapsed");
    obj.transition = transition;
    obj.maxHeight = `${height_param}px`;
    Object.assign(navigation.style, obj);
    collapse = height;
  };

  const handle_height = () => {

    height = window.innerWidth >= 576 ? 57 : 74;
    collapse = navbar_toggler.classList.contains("has-collapsed") ? height : navigation.scrollHeight;
  };

  const handle_navigationigation = () => {

    let positive = false;

    let scroll_pos = window.scrollY;

    const main_top = main.offsetTop;

    if (scroll_pos > scrollY) {

      positive = true;
    } else if (scroll_pos < scrollY) {

      positive = false;
    }
    
    if (scroll_pos < height) {  

      obj.position = "static";
      obj.top = "initial";
      handle_collapse("max-height 0.375s", height);
      body.style.marginTop = "";
    } else if (scroll_pos > main_top && scroll_pos < main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      handle_collapse("top 0.375s, max-height 0.375s", height);
      body.style.marginTop = `${height}px`;
    } else if (scroll_pos > height && scroll_pos < main_top + height) {  

      obj.position = "fixed";
      obj.top = `-${height}px`;
      handle_collapse("none", height);
      body.style.marginTop = `${height}px`;
    } else if (scroll_pos > main_top + height && positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      handle_collapse("top 0.375s, max-height 0.375s", 0);
      body.style.marginTop = `${height}px`;
    } else {
  
      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = `${collapse}px`;
      body.style.marginTop = `${height}px`;
    }

    Object.assign(navigation.style, obj);

    scrollY = scroll_pos;
  };

  events(window, "resize", handle_height, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "wheel", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
