import { events } from "./utillites.js";

export const slider_1 = () => {
  const slider_items = document.querySelectorAll(".slider-item");
  const slider_next_sm = document.querySelectorAll(".slider-next-sm");
  const slider_next_md = document.querySelector(".slider-next-md");
  const slider_next_lg = document.querySelector(".slider-next-lg");
  const slider_container = document.querySelector(".slider-container");
  const slider_body = document.querySelectorAll(".slider-body");

  if (
    slider_items.length === 0 ||
    slider_next_sm.length === 0 ||
    !slider_next_md ||
    !slider_next_lg ||
    !slider_container ||
    !slider_body
  ) {
    return;
  }

  let count = 0;

  const calc_min_height = () => {

    let min_height = [];

    for (const index of slider_body) {

      index.style.minHeight = "";
      min_height.push(index.getBoundingClientRect().height + 1);
    }

    const largest = Math.round(Math.max(...min_height));

    for (const index of slider_body) {

      index.style.minHeight = `${largest}px`;
    }

    slider_container.style.minHeight = `${largest}px`;
  };

  for (const [i, index] of slider_items.entries()) {

    index.style.transform = `translateX(${i * 100}%)`;
  }

  calc_min_height();

  const transform_item = () => {

    for (const [i, index] of slider_items.entries()) {

      index.classList.add("slider_1-item-has-opacity");

      setTimeout(() => {

        index.classList.remove("slider_1-item-has-opacity");
      }, 500);

      Object.assign(index.style,{ 
          
        transition: "transform 0.5s", 
        transform: `translateX(${100 * (i - count)}%)`
      });
    }
  };

  const reset_item = () => {

    let width = window.innerWidth;

    if (width >= 1200) { 
        
      Object.assign(slider_next_lg.style,{ 

        transition: "right 0.425s", 
        right: "0"
      });
    } else if (width >= 768 && width <= 1200) { 
      
      Object.assign(slider_next_md.style,{ 
          
        transition: "right 0.37s", 
        right: "0"
      });
    }

    for (const [i, index] of slider_items.entries()) {
      
      Object.assign(index.style,{ 
        
        transition: "transform 0.5s", 
        transform: `translateX(${i * 100}%)`
      });
    }

    count = 0;
  };

  const transform_button = () => {

    let width = window.innerWidth;

    if (count === slider_items.length - 2 && width >= 1200)  {

      Object.assign(slider_next_lg.style,{ 
        
        transition: "right 0.5s",
        right: "calc(((100% + 26px) / 3))"
      });
    } else if (count === slider_items.length - 1) {

      if (width >= 1200) {
        
        Object.assign(slider_next_lg.style,{ 

          transition: "right 0.5s",
          right: "calc(((100% + 26px) / 1.5))"
        });
      } else if (width >= 768 && width <= 1200) {
        
        Object.assign(slider_next_md.style,{ 

          transition: "right 0.5s",
          right: "calc(((100% + 26px) / 2))"
        });
      }
    } else if (count === slider_items.length) {

      reset_item();
    }
    transform_item();
  };

  const disabled = (event) => {

    event.target.disabled = "true";

    setTimeout(() => {

      event.target.disabled = "";
    }, 500);
  };

  events(slider_next_lg, "click", (event) => {

    count++;

    disabled(event);

    transform_button();
  });

  events(slider_next_md, "click", (event) => {

    count++;

    disabled(event);

    transform_button();
  });

  for (const index of slider_next_sm) {

    events(index, "click", (event) => {

      count++;

      disabled(event);

      transform_button();
    });
  }

  events(window, "resize", () => {

    calc_min_height();
    reset_item();
  }, { passive: true });
};
