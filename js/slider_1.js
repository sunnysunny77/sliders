import { events } from "./utillites.js";

export const slider_1 = () => {
  const slider_items = document.querySelectorAll(".slider-item");
  const slider_next_sm = document.querySelectorAll(".slider-next-sm");
  const slider_next_md = document.querySelector(".slider-next-md");
  const slider_next_lg = document.querySelector(".slider-next-lg");
  const slider_container = document.querySelector(".slider-container");
  const slider_button_container = document.querySelector(".slider-button-container");
  const slider_body = document.querySelectorAll(".slider-body");

  if (
    slider_items.length === 0 ||
    slider_next_sm.length === 0 ||
    !slider_next_md ||
    !slider_next_lg ||
    !slider_container ||
    !slider_button_container ||
    !slider_body
  ) {
    return;
  }

  let count = 0;

  const length = slider_items.length; 

  const init = () => {

    for (const index of slider_items) {

      index.style.transform = "";
    }
  };

  const transform_item = () => {

    for (const index of slider_items) {

      Object.assign(index.style,{ 
          
        transition: "transform 0.5s", 
        transform: `translateX(-${100 * count}%)`,
      });
    }
  };

  const reset_item = () => {

    Object.assign(slider_button_container.style,{ 
        
      transition: "transform 0.5s",
      transform:  "translateX(0)",
    });
  };

  const transform_button = () => {

    let width = window.innerWidth;

    if (count === length - 2 && width >= 1200)  {

      Object.assign(slider_button_container.style,{ 

        transition: "transform 0.5s",
        transform:  "translateX(-100%)",
      });
    } else if (count === length - 1) {
        
     width >= 1200 ? (
        
        Object.assign(slider_button_container.style,{ 

          transition: "transform 0.5s",
          transform:  "translateX(-200%)",
        })
      ) : (

        Object.assign(slider_button_container.style,{ 

          transition: "transform 0.5s",
          transform:  "translateX(-100%)",
        })
      );
    }
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

    if (count === length) {

      count = 0;
      reset_item();
      init();
      return;
    }

    transform_item();
  });

  events(slider_next_md, "click", (event) => {

    count++;

    disabled(event);

    transform_button();

    if (count === length) {

      count = 0;
      reset_item();
      init();
      return;
    }

    transform_item();
  });

  for (const index of slider_next_sm) {

    events(index, "click", (event) => {

      count++;

      disabled(event);
      
      transform_item();

      if (count === length) {

        count = 0;
        init();
        return;
      }
      
      transform_item();
    });
  }

  const resize = () => {

    let width = window.innerWidth;

    if (count === length - 2 && width >= 1200)  {

      Object.assign(slider_button_container.style,{ 

        transition: "none",
        transform:  "translateX(-100%)",
      });
    } else if (count === length - 1) {
        
     width >= 1200 ? (
        
        Object.assign(slider_button_container.style,{ 

          transition: "none",
          transform:  "translateX(-200%)",
        })
      ) : (

        Object.assign(slider_button_container.style,{ 

          transition: "none",
          transform:  "translateX(-100%)",
        })
      );
    } else {

      Object.assign(slider_button_container.style,{ 

        transition: "none",
        transform:  "translateX(0)",
      });
    }
  };

  events(window, "resize", resize, { passive: true });
};
