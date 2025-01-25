import { events } from "./utillites.js";

export const slider_nav = () => {
  const navbar_toggler = document.querySelector(".navbar-toggler");
  const navbar_collapse = document.querySelector(".navbar-collapse");
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector("main");
  const body = document.querySelector("body");

  if (!navigation || ! navbar_collapse || !main || !navbar_toggler || !body ) {
    
    return;
  }

  let scrollY = 0;

  let positive = false;

  let height = window.innerWidth >= 576 ? navigation.scrollHeight : navigation.scrollHeight - navbar_collapse.scrollHeight;

  let collapse;

  let style = {};

  const handle_toggle = () => {

    let obj = {};

    navbar_toggler.classList.toggle("has-collapsed");
    collapse = navbar_toggler.classList.contains("has-collapsed") ? height : navigation.scrollHeight;
    obj.transition = "max-height 0.375s";
    obj.maxHeight = `${collapse}px`;
    Object.assign(navigation.style, obj);
  };

  const handle_collapse = (transition, height_param) => {

    let obj = {};

    navbar_toggler.classList.add("has-collapsed");
    obj.transition = transition;
    obj.maxHeight = `${height_param}px`;
    Object.assign(navigation.style, obj);
    collapse = height;
  };

  const handle_height = () => {

    height = window.innerWidth >= 576 ? navigation.scrollHeight : navigation.scrollHeight - navbar_collapse.scrollHeight;
    collapse = navbar_toggler.classList.contains("has-collapsed") ? height : navigation.scrollHeight;
  };

  const handle_navigationigation = () => {

    let scroll_pos = window.scrollY;

    let obj = {};

    const main_top = main.offsetTop;

    const main_bottom = main.offsetTop + main.scrollHeight - collapse;
    
    if (scroll_pos > main_bottom) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.375s";   
    } else if (scroll_pos < height) {  

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

    if (obj !== style) Object.assign(navigation.style, obj);

    if (scroll_pos > scrollY) {

      positive = true;
    } else if (scroll_pos < scrollY) {

      positive = false;
    }

    style = obj;
    
    scrollY = scroll_pos;
  };

  events(window, "resize", handle_height, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "wheel", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
