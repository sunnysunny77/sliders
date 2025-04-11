import { events } from "./utillites.js";

export const slider_nav = () => {
  const navbar_toggler = document.querySelector(".navbar-toggler");
  const navbar_collapse = document.querySelector(".navbar-collapse");
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector("main");

  if (!navigation || ! navbar_collapse || !main || !navbar_toggler ) {
    
    return;
  }

  let scrollY = 0;

  let positive = false;

  let collapse;

  let has_collapsed = true;

  let height = window.innerWidth < 576 ? navigation.scrollHeight - navbar_collapse.scrollHeight : navigation.scrollHeight;

  const handle_bars = () => {

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

      transition: wins ? "opacity 0.375s" : "none",
      opacity: has_collapsed ? 1 : 0,
    });

    Object.assign(navbar_toggler.children[0].children[2].style, {

      transition: wins ? "transform 0.375s" : "none",
      transform: has_collapsed ? "none" : "translate(0, -7px) rotate(45deg)",
    });
  };

  const handle_toggle = () => {

    const wins = window.innerWidth < 576;
    has_collapsed = !has_collapsed;
    collapse = has_collapsed ? height : navigation.scrollHeight;

    Object.assign(navigation.style, {

      transition: wins ? "max-height 0.375s" : "top 0.375s, max-height 0.375s",
      maxHeight: `${collapse}px`,
    });

    handle_bars();
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
      obj.transition = "max-height 0.375s";
      obj.maxHeight = `${height}px`;
      has_collapsed = true;
      collapse = height;
      handle_bars();
      document.body.style.marginTop = "";
    } else if (scroll_pos > main_top && scroll_pos < main_top + height && !positive) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = `${height}px`;
      has_collapsed = true;
      collapse = height;
      handle_bars();
      document.body.style.marginTop = `${height}px`;
    } else if (scroll_pos > height && scroll_pos < main_top + height) {  

      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "none";
      obj.maxHeight = `${height}px`;
      has_collapsed = true;
      collapse = height;
      handle_bars();
      document.body.style.marginTop = `${height}px`;
    } else if ((scroll_pos > main_top + height && positive) || (scroll_pos > main_bottom)) {

      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = "0px";
      has_collapsed = true;
      collapse = height;
      handle_bars();
      document.body.style.marginTop = `${height}px`;
    } else {
  
      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = `${collapse}px`;
      document.body.style.marginTop = `${height}px`;
    }

    Object.assign(navigation.style, obj);

    if (scroll_pos > scrollY) {

      positive = true;
    } else if (scroll_pos < scrollY) {

      positive = false;
    }
    scrollY = scroll_pos;
  };

  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "wheel", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
