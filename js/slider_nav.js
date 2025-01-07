import { events } from "./utillites.js";

export const slider_nav = () => {
  const navbar_toggler = document.querySelector(".navbar-toggler");
  const navbar_collapse = document.querySelector(".navbar-collapse");
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector("main");
  const body = document.querySelector("body");

  if (!navigation || !main || !navbar_toggler || !body) {
    
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

    let scroll_pos =  window.scrollY;

    const collapse = navbar_toggler.classList.contains("has-collapsed") ? height : height + navbar_collapse.offsetHeight;

    const main_top = main.offsetTop;

    if (scroll_pos > scrollY) {

      positive = true;
    } 
    
    if (scroll_pos < scrollY)  {

      positive = false;
    }

    if (scroll_pos < main_top) {

      obj.position = "static";
      obj.top = "initial";
      obj.transition = "none";
      obj.maxHeight = `${collapse}px`;
      body.style.paddingTop = "";
    } 

    if ((scroll_pos > main_top && positive) || (scroll_pos > main_top && scroll_pos < main_top + collapse && !positive)) {

      obj.position = "fixed";
      obj.top = `-${collapse}px`;
      obj.transition = "top 0.375s, max-height 1s";
      obj.maxHeight = "0px";
      body.style.paddingTop = `${collapse}px`;
    } 
    
    if (scroll_pos > main_top + collapse && !positive) {

      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s, max-height 1s";
      obj.maxHeight = `${collapse}px`;
      body.style.paddingTop = `${collapse}px`;
    } 

    Object.assign(navigation.style, obj);

    scrollY = scroll_pos;
  };

  const handle_toggle_breakpoint = () => {
    
    if (window.innerWidth > 576) {

      navbar_collapse.style.maxHeight = "";
      navbar_toggler.classList.add("has-collapsed");
    }
  };

  const handle_toggle = () => {

    let max_height;
    let navigation_obj = {};
    let navbar_collapse_obj = {};
    navbar_toggler.classList.toggle("has-collapsed");
    const contains = navbar_toggler.classList.contains("has-collapsed");
    const collapse = navbar_collapse.scrollHeight;

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
