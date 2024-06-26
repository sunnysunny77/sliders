const slider_8 = () => {
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector("main");

  if (!navigation || !main) {
    return;
  }

  let cached = null;

  const handle_navigationigation = (event) => {
    if (!cached) {
      setTimeout(() => {
        const scroll_top = window.scrollY;
        const navigation_height = navigation.getBoundingClientRect().height;
        const line = main.offsetTop;
        if (scroll_top >= line - navigation_height && window.innerWidth > 576) {
          navigation.classList.add("navigation_fixed");
          navigation.classList.remove("navigation_other");
        } else if (window.innerWidth > 576) {
          navigation.classList.add("navigation_other");
          navigation.classList.remove("navigation_fixed");
        } else if (window.innerWidth <= 576) {
          navigation.classList.remove("navigation_fixed");
          navigation.classList.remove("navigation_other");
        }
        cached = null;
      }, 150);
    }
    cached = true;
  };
  events(window, "scroll", handle_navigationigation, { passive: true });
  events(window, "resize", handle_navigationigation, { passive: true });
};
