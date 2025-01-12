import { events } from "./utillites.js";

export const slider_5 = () => {
  const site_img = document.querySelectorAll(".site-img");
  const scroll_listener = document.querySelector(".scroll-listener");
  const slider_close = document.querySelector(".slider-close");

  if (site_img.length === 0 || !scroll_listener || !slider_close) {
    return;
  }

  const picture_display = (index) => {

    const item = site_img[index];
    const item_minus = site_img[index - 1];
    const item_plus = site_img[index + 1];
    if (item_minus) item_minus.classList.remove("d-has-display");
    if (item_plus) item_plus.classList.remove("d-has-display");
    item.classList.add("d-has-display");
  };

  events(scroll_listener, "scroll", (event) => {

    const scroll_preview = document.querySelectorAll(".scroll-preview");

    if (scroll_preview.length === 0) {

      return;
    }

    const scrollY = event.target.scrollTop;

    for (const [i, index] of scroll_preview.entries()) {

      if (scrollY > index.offsetTop && scrollY < index.offsetTop + index.getBoundingClientRect().height) {

        picture_display(i + 1);
      } else if ( scrollY < scroll_preview[0].offsetTop) {

        picture_display(0);
      }
    }
  }, { passive: true });

  events(slider_close, "click", () => {

    for (const index of site_img) {

      index.classList.remove("d-has-display");
    }
    
    scroll_listener.scroll(0, 0);
  });
};
