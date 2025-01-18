import { events } from "./utillites.js";

export const slider_1 = () => {
  const slider_items = document.querySelectorAll(".slider-item");
  const slider_next_sm = document.querySelectorAll(".slider-next-sm");
  const slider_next_md = document.querySelector(".slider-next-md");
  const slider_next_lg = document.querySelector(".slider-next-lg");
  const slider_button_container = document.querySelector(".slider-button-container");

  if (
    slider_items.length === 0 ||
    slider_next_sm.length === 0 ||
    !slider_next_md ||
    !slider_next_lg ||
    !slider_button_container
  ) {
    return;
  };

  let count = 0;

  const transition = "transform 0.5s"; 

  const length = slider_items.length; 

  const init = () => {

    for (const index of slider_items) {

      index.style.transform = "";
    };
  };

  const transform_item = () => {

    for (const index of slider_items) {

      Object.assign(index.style,{ 
          
        transition: transition, 
        transform: `translateX(-${100 * count}%)`,
      });
    };
  };

  const reset_item = (transition) => {

    Object.assign(slider_button_container.style,{ 
        
      transition: transition,
      transform:  "translateX(0)",
    });
  };

  const transform_button_lg = (transition) => {

    if (count === length - 2)  {

      Object.assign(slider_button_container.style,{ 

        transition: transition,
        transform:  "translateX(-100%)",
      });
    } else if (count === length - 1) {
           
      Object.assign(slider_button_container.style,{ 

        transition: transition,
        transform:  "translateX(-200%)",
      });
    } else {

      reset_item(transition);
    };
  };

  const transform_button_md = (transition) => {

    if (count === length - 1) {
        
      Object.assign(slider_button_container.style,{ 

        transition: transition,
        transform:  "translateX(-100%)",
      });
    } else {

      reset_item(transition);
    };
  };

  const disabled = (event) => {

    event.target.disabled = "true";

    setTimeout(() => {

      event.target.disabled = "";
    }, 500);
  };

  const resize = () => {

    const width = window.innerWidth;

    if (width >= 1200) { 
      
      transform_button_lg("none");
    } else if (width >= 768 && width < 1200) {

      transform_button_md("none");
    } else {

      reset_item("none");
    };
  };

  events(slider_next_lg, "click", (event) => {

    count++;

    disabled(event);

    transform_button_lg(transition);

    if (count === length) {

      count = 0;
      init();
    } else {

      transform_item();
    };
  });

  events(slider_next_md, "click", (event) => {

    count++;

    disabled(event);

    transform_button_md(transition);

    if (count === length) {
      
      count = 0;
      init();
    } else {

      transform_item();
    };
  });

  for (const index of slider_next_sm) {

    events(index, "click", (event) => {

      count++;

      disabled(event);

      if (count === length) {
      
        count = 0;
        init();
      } else {
  
        transform_item();
      };
    });
  };

  events(window, "resize", resize, { passive: true });
};
