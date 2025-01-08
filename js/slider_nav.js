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

  let max_height;
  
  let max_height_collapse;

  let obj = {};

  let navigation_obj = {};

  let navbar_collapse_obj = {};

  const handle_collapse = () => {

    navbar_toggler.classList.add("has-collapsed");
    max_height = window.innerWidth >= 576 ? height : 0;
    max_height_collapse = height;
    navbar_collapse_obj.transition = window.innerWidth >= 576 ? "none" : "max-height 0.5s"; 
    navbar_collapse_obj.maxHeight = `${max_height}px`;
    Object.assign(navbar_collapse.style, navbar_collapse_obj);
  };

  const handle_height = () => {

    height = window.innerWidth >= 576 ? 74 : 57;
    handle_collapse();
  };

  handle_height();

  const handle_navigationigation = () => {

    let positive = false;

    let scroll_pos =  window.scrollY;

    const collapse = navbar_toggler.classList.contains("has-collapsed") ? height : height + navbar_collapse.scrollHeight;

    const main_top = main.offsetTop;

    if (scroll_pos > scrollY) {

      positive = true;
    } 
    
    if (scroll_pos < scrollY)  {

      positive = false;
    }

    if (scroll_pos < main_top && !positive) {  

      obj.position = "static";
      obj.top = "initial";
      obj.transition = "none";
      obj.maxHeight = `${collapse}px`;
      body.style.paddingTop = "";
    } 

    if (scroll_pos < main_top && positive) {  

      obj.position = "static";
      obj.top = "initial";
      obj.transition = "max-height 0.5s";
      obj.maxHeight = `${height}px`;
      handle_collapse();
      body.style.paddingTop = "";
    } 

    if ((scroll_pos > main_top + height && positive) || (scroll_pos > main_top && scroll_pos < main_top + height)) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 1s, max-height 1s";
      obj.maxHeight = "0px";
      handle_collapse();
      body.style.paddingTop = `${height}px`;
    }
    
    if (scroll_pos > main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s, max-height 1s";
      obj.maxHeight = `${collapse}px`;
      body.style.paddingTop = `${height}px`;
    } 

    Object.assign(navigation.style, obj);

    scrollY = scroll_pos;
  };

  const handle_toggle = () => {

    navbar_toggler.classList.toggle("has-collapsed");
    const contains = navbar_toggler.classList.contains("has-collapsed");
    const collapse = navbar_collapse.scrollHeight;

    if (contains) {

      max_height = 0;
      max_height_collapse = height;
    }  else {

      max_height = collapse;
      max_height_collapse = height + collapse;
    }

    navigation_obj.transition = "max-height 0.5s";
    navigation_obj.maxHeight = `${max_height_collapse}px`;
    navbar_collapse_obj.transition = "max-height 0.5s"; 
    navbar_collapse_obj.maxHeight = `${max_height}px`;

    Object.assign(navigation.style, navigation_obj);
    Object.assign(navbar_collapse.style, navbar_collapse_obj);
  };

  events(window, "resize", handle_height, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
