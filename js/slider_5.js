const slider_5 = () => {
  const site_img = document.querySelectorAll(".site-img");
  const scroll_listener = document.querySelector(".scroll-listener");
  const slider_close = document.querySelector(".slider-close");
  if (site_img.length === 0 || !scroll_listener || !slider_close) {
    return;
  }

  let picture_id = [];

  for (const index of site_img) {
    picture_id.push(index.id);
  }

  const picture_display = (item) => {
    for (const index of site_img) {
      const bool = index.id === item;
      const contains = index.classList.contains("d-has-display");
      if (bool && !contains) {
        index.classList.add("d-has-display");
      } else if (!bool && contains) {
        index.classList.remove("d-has-display");
      }
    }
  };

  events(
    scroll_listener,
    "scroll",
    (event) => {
      const scroll_preview = document.querySelectorAll(".scroll-preview");
      if (scroll_preview.length === 0) {
        return;
      }
      const ranges = [...scroll_preview].map((item) => item.offsetTop);
      const scroll_pos = event.target.scrollTop;

      if (scroll_pos < ranges[0]) {
        picture_display(picture_id[0]);
      }
      for (const [i, index] of ranges.entries()) {
        if (
          i !== ranges.length &&
          scroll_pos > index &&
          scroll_pos < ranges[i + 1]
        ) {
          picture_display(picture_id[i + 1]);
        }
      }
      if (scroll_pos > ranges.at(-1)) {
        picture_display(picture_id.at(-1));
      }
    },
    { passive: true }
  );

  events(slider_close, "click", () => {
    scroll_listener.scroll(0, 0);
  });
};
