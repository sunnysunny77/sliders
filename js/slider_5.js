const slider_5 = () => {
  const site_img = document.querySelectorAll(".site-img");
  const scroll_listener = document.querySelector(".scroll-listener");
  const scroll_preview = document.querySelectorAll(".scroll-preview");
  const slider_close = document.querySelector(".slider-close");

  if (scroll_preview .length === 0 || !scroll_listener|| !scroll_preview || !slider_close) {
    return;
  }

  let picture_id = [];

  for (let index = 1; index <= site_img.length; index++) {
    picture_id.push(`site-${index}`);
  }

  const picture_display = (item) => {
    for (const index of picture_id) {
      const obj = document.querySelector(`#${index}`);
      const bool = obj.id === item;
      const contains = obj.classList.contains("d-has-display");
      if (bool && !contains) {
        obj.classList.add("d-has-display");
      } else if (!bool && contains) {
        obj.classList.remove("d-has-display");
      }
    }
  };

  events(
    scroll_listener,
    "scroll",
    (event) => {
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

  events(slider_close, "click", () =>{
    scroll_listener.scroll(0, 0);
  });
};
