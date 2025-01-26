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

  let style = {};

  let collapse;

  let has_collapsed = true;

  let height = window.innerWidth < 576 ? navigation.scrollHeight - navbar_collapse.scrollHeight : navigation.scrollHeight;

  const handle_children = () => {

    const wins = window.innerWidth < 576;

    for (const index of navbar_collapse.children[0].children) {

      Object.assign(index.style, {

        transition: wins ? "transform 0.375s" : "none",
        transform: wins && has_collapsed ? `translateY(-${navbar_collapse.children.length}00%)` : "translateY(0)",
      });
    };

    Object.assign(navbar_toggler.children[0].children[0].style, {

      transition: wins ? "transform 0.375s" : "none",
      transform: has_collapsed ? "none" : "translate(0, 7px) rotate(-45deg)",
    });

    Object.assign(navbar_toggler.children[0].children[1].style, {

      opacity: has_collapsed ? 1 : 0,
    });

    Object.assign(navbar_toggler.children[0].children[2].style, {

      transition: wins ? "transform 0.375s" : "none",
      transform: has_collapsed ? "none" : "translate(0, -7px) rotate(45deg)",
    });
  };

  const handle_collapse = (transition, height_param) => {

    has_collapsed = true;
    collapse = height;

    Object.assign(navigation.style, {

      transition: transition,
      maxHeight: `${height_param}px`,
    });
    
    handle_children();
  };

  const handle_toggle = () => {

    const wins = window.innerWidth < 576;
    has_collapsed = !has_collapsed;
    collapse = has_collapsed ? height : navigation.scrollHeight;

    Object.assign(navigation.style, {

      transition: wins ? "max-height 0.375s" : "top 0.375s, max-height 0.375s",
      maxHeight: `${collapse}px`,
    });

    handle_children();
  };

  const handle_navigationigation = () => {

    const wins = window.innerWidth < 576;

    height = wins ? navigation.scrollHeight - navbar_collapse.scrollHeight : navigation.scrollHeight;

    collapse = has_collapsed ? height : navigation.scrollHeight;

    let scroll_pos = window.scrollY;

    let obj = {};

    const main_top = main.offsetTop;

    const main_bottom = main.offsetTop + main.scrollHeight - height;
    
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
    } else if ((scroll_pos > main_top + height && positive) || (scroll_pos > main_bottom)) {

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

  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "wheel", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
