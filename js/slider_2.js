import { events } from "./utillites.js";

export const slider_2 = () => {
  const timeline_items = document.querySelectorAll(".timeline-item");
  const timeline_button = document.querySelector(".timeline-button");
  const timeline_container = document.querySelector(".timeline-container");

  if (timeline_items.length === 0 || !timeline_button || !timeline_container) {
    return;
  }

  let count = 0;

  timeline_container.style.maxHeight = `${timeline_container.offsetHeight}px`;

  events(timeline_button, "click", () => {

    count++;

    if (count === timeline_items.length) {
      
      count = 0;

      document.querySelector("#slider_2-top").scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
      
        timeline_container.style.maxHeight = `${timeline_items[count].offsetHeight}px`,
    
        setTimeout(() => {
          
          for (const [i, item] of timeline_items.entries()) {

            if (i > 0) {

              item.classList.replace("d-flex", "d-none");
            }
          }

          timeline_button.disabled = "";
        }, 900);
      }, 100);

      return;
    }
    
    timeline_button.disabled = "true";
    timeline_items[count].classList.replace("d-none", "d-flex");
    timeline_container.style.maxHeight = `${timeline_container.offsetHeight + timeline_items[count].offsetHeight}px`,

    setTimeout(() => {

      timeline_button.disabled = "";
    }, 1000);
  });

  events(window, "resize", () => {

    timeline_container.style.maxHeight = "";
    timeline_container.style.maxHeight = `${timeline_container.offsetHeight}px`;
  }, { passive: true });
};
