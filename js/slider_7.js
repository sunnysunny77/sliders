import { events } from "./utillites.js";

export const slider_7 = () => {
  const overlay_open = document.querySelectorAll(".overlay-open");
  const overlay_body = document.querySelectorAll(".overlay_body");

  if (overlay_open.length === 0 || overlay_body.length === 0) {
    return;
  }

  for (const [i, item] of overlay_open.entries()) {
    item.setAttribute("aria-expanded", false);
    item.setAttribute("aria-controls", `${overlay_body[i].id}`);

    events(overlay_body[i].querySelector(".overlay-next"), "click", (event) => {
      event.preventDefault();
      document.body.style.paddingRight = 0;
      overlay_body[i].classList.remove("overlay-fixed") ||
        overlay_body[i].classList.remove("overlay-fixed-delay");
      document.body.classList.remove("overflow-hidden");
      overlay_body[i].setAttribute("aria-expanded", false);
      overlay_open[i].setAttribute("aria-expanded", false);
      overlay_body[i + 1].classList.add("overlay-fixed-delay");
      overlay_open[i + 1].setAttribute("aria-expanded", true);
      document.body.style.paddingRight = `${
        window.innerWidth - document.body.offsetWidth
      }px`;
      document.body.classList.add("overflow-hidden");
    });

    events(
      overlay_body[i].querySelector(".overlay-close"),
      "click",
      (event) => {
        event.preventDefault();
        document.body.style.paddingRight = 0;
        overlay_body[i].classList.remove("overlay-fixed") ||
          overlay_body[i].classList.remove("overlay-fixed-delay");
        document.body.classList.remove("overflow-hidden");
        overlay_body[i].setAttribute("aria-expanded", false);
        overlay_open[i].setAttribute("aria-expanded", false);
      }
    );

    events(item, "click", (event) => {
      event.preventDefault();
      overlay_body[i].classList.add("overlay-fixed");
      overlay_body[i].setAttribute("aria-expanded", true);
      overlay_open[i].setAttribute("aria-expanded", true);
      document.body.style.paddingRight = `${
        window.innerWidth - document.body.offsetWidth
      }px`;
      document.body.classList.add("overflow-hidden");
    });
  }
};
