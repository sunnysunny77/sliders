import { events } from "./utillites.js";

export const slider_7 = () => {
  const overlay_open = document.querySelectorAll(".overlay-open");

  if (overlay_open.length === 0) {
    return;
  }

  for (const item of overlay_open) {
    item.setAttribute("aria-expanded", false);
    const id = item.id.slice(item.id.indexOf("-"));
    item.setAttribute("aria-controls", `overlay${id}`);

    events(item, "click", (event) => {
      event.preventDefault();
      const width = window.innerWidth - document.body.offsetWidth;
      const obj = document.querySelector(`#overlay_body${id}`);

      obj.classList.add("overlay-fixed");
      obj.setAttribute("aria-expanded", true);
      item.setAttribute("aria-expanded", true);

      document.body.style.paddingRight = `${width}px`;
      document.body.classList.add("overflow-hidden");

      events(
        document.querySelector(`#overlay_close${id}`),
        "click",
        (event) => {
          event.preventDefault();
          document.body.style.paddingRight = 0;
          obj.classList.remove("overlay-fixed");
          document.body.classList.remove("overflow-hidden");
          obj.setAttribute("aria-expanded", false);
          item.setAttribute("aria-expanded", false);
        }
      );
    });
  }
};
