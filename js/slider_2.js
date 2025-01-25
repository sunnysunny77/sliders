import { events } from "./utillites.js";

export const slider_2 = () => {
  const timeline_items = document.querySelectorAll(".timeline-item");
  const timeline_button = document.querySelector(".timeline-button");
  const timeline_container = document.querySelector(".timeline-container");

  if (timeline_items.length === 0 || !timeline_button || !timeline_container) {
    return;
  }

  let count = 0;

  const transition = "max-height 1s"; 

  timeline_container.style.maxHeight = `${timeline_container.getBoundingClientRect().height}px`;

  Object.assign(timeline_container.style,{ 
          
    transition: "none", 
    maxHeight: `${timeline_container.getBoundingClientRect().height}px`,
  });

  events(timeline_button, "click", () => {

    count++;

    if (count === timeline_items.length) {
      
      count = 0;

      document.querySelector("#slider_2-top").scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        
        Object.assign(timeline_container.style,{ 
          
          transition: transition, 
          maxHeight: `${timeline_items[count].getBoundingClientRect().height}px`,
        });
    
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

    Object.assign(timeline_container.style,{ 
          
      transition: transition, 
      maxHeight: `${timeline_container.getBoundingClientRect().height + timeline_items[count].getBoundingClientRect().height}px`,
    });

    setTimeout(() => {

      timeline_button.disabled = "";
    }, 1000);
  });

  events(window, "resize", () => {

    Object.assign(timeline_container.style,{ 
          
      transition: "none", 
      maxHeight: `${timeline_container.scrollHeight}px`,
    });
  }, { passive: true });
};
