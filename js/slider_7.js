import { events } from "./utillites.js";

const open = (event) => {

  const target = event.currentTarget.getAttribute("aria-controls");
  const obj = document.querySelector(`#${target}`);
  const backdrop = obj.getAttribute("backdrop");
  document.querySelector(`#${backdrop}`).classList.add("overlay-transition");
  obj.style.transition = "transform 0.5s cubic-bezier(0.66, 0.01, 0.27, 0.84)";
  obj.classList.add("overlay-fixed");
  event.currentTarget.setAttribute("aria-expanded", true);
  obj.setAttribute("aria-expanded", true);
  document.body.style.paddingRight = `${ window.innerWidth - document.body.offsetWidth}px`;
  document.body.classList.add("overflow-hidden");
};

const close = (event) => {

  const target = event.currentTarget.getAttribute("target");
  const controlls = event.currentTarget.getAttribute("controlls");
  const obj = document.querySelector(`#${controlls}`);
  obj.style.transition = "transform 0.5s cubic-bezier(0.66, 0.01, 0.27, 0.84)";
  document.body.style.paddingRight = 0;
  obj.classList.remove("overlay-fixed");
  document.body.classList.remove("overflow-hidden");
  obj.setAttribute("aria-expanded", false);
  document.querySelector(`#${target}`).setAttribute("aria-expanded", false);

  for (const item of document.querySelectorAll(".overlay-backdrop")) {

    item.classList.remove("overlay-transition");
  }
};

const next = (event) => {

  const targetPrevious = event.currentTarget.getAttribute("target_previous");
  const controllsPrevious = event.currentTarget.getAttribute("controlls_previous");
  const targetCurrent = event.currentTarget.getAttribute("target_current");
  const controllsCurrent = event.currentTarget.getAttribute("controlls_current");
  const objPrevious = document.querySelector(`#${controllsPrevious}`);
  const objCurrent = document.querySelector(`#${controllsCurrent}`);
  objPrevious.style.transition = "transform 0.5s cubic-bezier(0.66, 0.01, 0.27, 0.84)";
  objCurrent.style.transition = "transform 0.5s cubic-bezier(0.66, 0.01, 0.27, 0.84) 0.5s";
  objPrevious.classList.remove("overlay-fixed");
  document.body.classList.remove("overflow-hidden");
  objPrevious.setAttribute("aria-expanded", false);
  document.querySelector(`#${targetPrevious}`).setAttribute("aria-expanded", false);
  document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`;
  document.body.classList.add("overflow-hidden");
  objCurrent.classList.add("overlay-fixed");
  objCurrent.setAttribute("aria-expanded", true);
  document.querySelector(`#${targetCurrent}`).setAttribute("aria-expanded", false);
};

export const slider_7 = () => {

  const overlay_body = document.querySelectorAll(".overlay_body");
  const overlay_open = document.querySelectorAll(".overlay-open");
  const overlay_close = document.querySelectorAll(".overlay-close");
  const overlay_next = document.querySelectorAll(".overlay-next");
  const overlay_backdrop = document.querySelectorAll(".overlay-backdrop");

  if (
    overlay_body.length === 0 || 
    overlay_open.length === 0 || 
    overlay_close.length === 0 || 
    overlay_next.length === 0 || 
    overlay_backdrop.length === 0
  ) {
    return;
  }

  for (let i = 0; i < overlay_open.length; i++) {

    overlay_open[i].setAttribute("aria-expanded", false);
    overlay_open[i].setAttribute("aria-controls", `${overlay_body[i].id}`);
    overlay_close[i].setAttribute("target", "overlay_open-" + i);
    overlay_close[i].setAttribute("controlls", `${overlay_body[i].id}`);
    overlay_next[i].setAttribute("target_previous", "overlay_open-" + i);
    overlay_next[i].setAttribute("controlls_previous", `${overlay_body[i].id}`);
    overlay_body[i].setAttribute("backdrop", `${overlay_backdrop[i].id}`);

    if (i === overlay_body.length - 1) {

      overlay_next[i].setAttribute("target_current", "overlay_open-0");
      overlay_next[i].setAttribute("controlls_current", `${overlay_body[0].id}`);
    } else {

      const index = i + 1;
      overlay_next[i].setAttribute("target_current", "overlay_open-" + index);
      overlay_next[i].setAttribute("controlls_current", `${overlay_body[index].id}`);
    }

    events(overlay_open[i], "click", open);
    events(overlay_close[i], "click", close);
    events(overlay_next[i], "click", next);
  }
};
