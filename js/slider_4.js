import { events, get_position } from "./utillites.js";

export const slider_4 = () => {
  const figure_one = document.querySelector(".figure-one");
  const figure_two = document.querySelector(".figure-two");
  const height_container = document.querySelector(".height-container");
  const scroll = document.querySelectorAll(".scroll");

  if (scroll.length === 0 || !figure_one || !figure_two || !height_container) {
    return;
  }

  events(
    window,
    "scroll",
    () => {
      if (window.innerWidth < 768) {
        return;
      }

      const line = get_position(height_container) + height_container.getBoundingClientRect().height / 2;
      let scrollY = window.scrollY + window.innerHeight / 2;

      if (scrollY < line) {
        figure_two.classList.replace("d-md-has-height", "d-md-0-height");
        figure_one.classList.replace("d-md-0-height", "d-md-has-height");
      } else if (scrollY > line) {
        figure_one.classList.replace("d-md-has-height", "d-md-0-height");
        figure_two.classList.replace("d-md-0-height", "d-md-has-height");
      }
    },
    { passive: true }
  );

  const handle_scroll_animation_desktop = () => {
    if (window.innerWidth < 768) {
      return;
    }

    const position = get_position(height_container);
    const contains = height_container.classList.contains(
      "scroll-animation-desktop"
    );
    const height = height_container.getBoundingClientRect().height;
    const scroll_desktop = window.scrollY;
    const top = position;
    const bottom = position + height / 2.5;

    if (scroll_desktop < top && contains) {
      height_container.classList.remove("scroll-animation-desktop");
    } else if (scroll_desktop > top && scroll_desktop < bottom && !contains) {
      height_container.classList.add("scroll-animation-desktop");
    } else if (scroll_desktop > bottom && contains) {
      height_container.classList.remove("scroll-animation-desktop");
    }
  };

  const handle_scroll_animation_mobile = () => {
    if (window.innerWidth > 768) {
      return;
    }

    for (const index of scroll) {
      const position = get_position(index);
      const contains = index.classList.contains("scroll-animation-mobile");
      const height = index.getBoundingClientRect().height;
      const scroll_mobile =
        window.scrollY + window.innerHeight - height;

      if (scroll_mobile > position && !contains) {
        index.classList.add("scroll-animation-mobile");
      } else if (scroll_mobile < position && contains) {
        index.classList.remove("scroll-animation-mobile");
      }
    }
  };

  events(window, "scroll", handle_scroll_animation_desktop, { passive: true });
  events(window, "resize", handle_scroll_animation_desktop, { passive: true });
  events(window, "scroll", handle_scroll_animation_mobile, { passive: true });
  events(window, "resize", handle_scroll_animation_mobile, { passive: true });
};
