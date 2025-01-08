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

  let height = window.innerWidth >= 576 ? 57 : 74;

  let max_height;

  let obj = {};

  let navbar_collapse_obj = {};

  const handle_collapse = (transition) => {

    navbar_toggler.classList.add("has-collapsed");
    max_height = window.innerWidth >= 576 ? height : 0;
    navbar_collapse_obj.transition = transition; 
    navbar_collapse_obj.maxHeight = `${max_height}px`;
    Object.assign(navbar_collapse.style, navbar_collapse_obj);
  };

  const handle_height = () => {

    height = window.innerWidth >= 576 ? 57 : 74;
  };

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

    if (scroll_pos < main_top && positive) {  

      obj.position = "static";
      obj.top = "initial";
      obj.transition = "max-height 0.75s";
      obj.maxHeight = `${collapse}px`;
      body.style.paddingTop = "";
      handle_collapse("max-height 0.75s");
    } 

    if (scroll_pos < main_top && !positive) {  

      obj.position = "static";
      obj.top = "initial";
      obj.transition = "max-height 0.75s";
      obj.maxHeight = `${collapse}px`;
      body.style.paddingTop = "";
    } 

    if (scroll_pos > main_top && scroll_pos < main_top + height && positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "none";
      obj.maxHeight = "0px";
      body.style.paddingTop = `${height}px`;
      handle_collapse("none");
    }

    if (scroll_pos > main_top && scroll_pos < main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.75s, max-height 0.75s";
      obj.maxHeight = "0px";
      body.style.paddingTop = `${height}px`;
      handle_collapse("max-height 0.75s");
    }

    if (scroll_pos > main_top + height && positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.75s, max-height 0.75s";
      obj.maxHeight = "0px";
      body.style.paddingTop = `${height}px`;
      handle_collapse("max-height 0.75s");
    }
    
    if (scroll_pos > main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.75s, max-height 0.75s";
      obj.maxHeight = `${collapse}px`;
      body.style.paddingTop = `${height}px`;
    } 

    Object.assign(navigation.style, obj);

    scrollY = scroll_pos;
  };

  const handle_toggle = () => {

    navbar_toggler.classList.toggle("has-collapsed");
    const contains = navbar_toggler.classList.contains("has-collapsed");

    if (contains) {

      max_height = 0;
    }  else {

      max_height = navbar_collapse.scrollHeight;
    }

    navbar_collapse_obj.transition = "max-height 0.75s"; 
    navbar_collapse_obj.maxHeight = `${max_height}px`;

    Object.assign(navbar_collapse.style, navbar_collapse_obj);

    handle_navigationigation();
  };

  events(window, "resize", handle_height, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
