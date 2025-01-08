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

  let collapse_height;

  let obj = {};

  const handle_collapse = (transition) => {

    navbar_toggler.classList.add("has-collapsed");
    obj.transition = transition;
    obj.height = `${height}px`;
    Object.assign(navigation.style, obj);
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
      body.style.paddingTop = "";
      handle_collapse("height 0.75s");
    } 

    if (scroll_pos < main_top && !positive) {

      obj.position = "static";
      obj.top = "initial";
      obj.transition = "none";
      obj.height = `${collapse}px`;
      body.style.paddingTop = "";
    }

    if (scroll_pos > main_top && scroll_pos < main_top + height && positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      body.style.paddingTop = `${height}px`;
      handle_collapse("none");
    }

    if (scroll_pos > main_top && scroll_pos < main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      body.style.paddingTop = `${height}px`;
      handle_collapse("top 0.75s, height 0.75s");
    }

    if (scroll_pos > main_top + height && positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.75s, height 0.75s";
      obj.height = "0px";
      body.style.paddingTop = `${height}px`;
    }
    
    if (scroll_pos > main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.75s, height 0.75s";
      obj.height = `${collapse}px`;
      body.style.paddingTop = `${height}px`;
    } 

    Object.assign(navigation.style, obj);

    scrollY = scroll_pos;
  };

  const handle_toggle = () => {

    navbar_toggler.classList.toggle("has-collapsed");

    if (navbar_toggler.classList.contains("has-collapsed")) {

      collapse_height = height;
    }  else {

      collapse_height = height + navbar_collapse.scrollHeight;
    }

    obj.transition = "height 0.75s";
    obj.height = `${collapse_height}px`;
    Object.assign(navigation.style, obj);
  };

  obj.transition = "height 0.75s";
  obj.height = `${height}px`;
  Object.assign(navigation.style, obj);

  events(window, "resize", handle_height, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
