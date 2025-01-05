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

  const handle_navigationigation = () => {
    
        let positive = false;

        if (window.scrollY >= scrollY) {
  
          positive = true;
        } else if (window.scrollY < scrollY)  {
  
          positive = false;
        }
  
        scrollY = window.scrollY;
  
        if (scrollY < main.offsetTop + navigation.scrollHeight && scrollY > main.offsetTop && !positive) {
  
          navigation.classList.add("navigation-top", "navigation-fixed");
        } else if (scrollY > main.offsetTop && !positive) {
    
          navigation.classList.replace("navigation-top", "navigation-fixed");
        } else if (scrollY > main.offsetTop && positive) {
  
          header.style.paddingTop = window.innerWidth > 576 ? "65px" : "74px"; 
          navigation.classList.add("navigation-top", "navigation-fixed");
          
        }  else {
  
          header.style.paddingTop = 0;
          navigation.classList.remove("navigation-top", "navigation-fixed");
        }
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

    if (navbar_toggler.classList.contains("has-collapsed")) {
      max_height = 0;
    }  else {
      max_height = navbar_collapse.scrollHeight;
    }

    navbar_collapse.style.maxHeight = `${max_height}px`;
  };

  events(window, "resize", handle_toggle_breakpoint, { passive: true });
  events(navbar_toggler, "click", handle_toggle);
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
