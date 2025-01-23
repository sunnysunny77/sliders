import { events } from "./utillites.js";

export const slider_3 = () => {
  const inner = document.querySelector(".inner");
  const image1 = document.querySelector(".image-1");
  const image2 = document.querySelector(".image-2");
  const image_fill_left = document.querySelector(".image-fill-left");
  const image_fill_right = document.querySelector(".image-fill-right");
  const open_right = document.querySelector(".open-right");
  const open_left = document.querySelector(".open-left");
  const percentage = document.querySelector(".percentage-change");
  const static_count = document.querySelectorAll(".static-count");
  const link_open = document.querySelectorAll(".link-open");
  const button_toggle = document.querySelector(".button-toggle");


  if (
    static_count.length === 0 ||
    link_open.length === 0 ||
    !inner ||
    !image1 ||
    !image2 ||
    !image_fill_left ||
    !image_fill_right ||
    !open_right ||
    !open_left ||
    !percentage ||
    !button_toggle
  ) {
    return;
  }

  let counter = 0;
  let array_src = [];
  let array_href = [];
  let array_text = [];
  let array_anchor = [];
  let width;
  let percent;
  let interval_id;

  for (const item of static_count) {
    array_src.push(item.children[0].src);
    array_href.push(item.children[1].getAttribute("data-href"));
    array_text.push(item.children[1].innerHTML.trim());
    array_anchor.push(item.children[1]);
  }

  const percent_clac = (counter) => {
    percent = Math.floor((((counter + 1) / static_count.length) * 100) / 1);
  };

  percent_clac(counter);

  const interval = () => {
    width = percent > width ? width + 1 : width - 1;
    percentage.style.width = `${width}%`;

    if (percent === width) {
      clearInterval(interval_id);
    }
  };

  const iteration_end = () => {
    const next = counter === static_count.length - 1 ? 0 : counter + 1;
    open_right.disabled = false;
    open_left.disabled = false;
    image_fill_right.classList.remove("has-right");
    image_fill_left.classList.remove("has-left");
    image_fill_right.style.backgroundImage = `url(${array_src[counter]}`;
    image_fill_left.style.backgroundImage = `url(${array_src[next]}`;
    image_fill_right.setAttribute("data-href", array_href[counter]);
    image_fill_left.setAttribute("data-href", array_href[next]);
    image_fill_right.setAttribute("aria-label", array_text[counter]);
    image_fill_left.setAttribute("aria-label", array_text[next]);
  };

  const iteiteration_start = () => {
    const next = counter === static_count.length - 1 ? 0 : counter + 1;
    image1.classList.remove("has-opacity-image");
    image2.classList.remove("has-opacity-image");
    inner.classList.remove("has-opacity-inner");
    image1.style.backgroundImage = `url(${array_src[counter]}`;
    image2.style.backgroundImage = `url(${array_src[next]}`;
    image1.setAttribute("data-href", array_href[counter]);
    image2.setAttribute("data-href", array_href[next]);
    image1.setAttribute("aria-label", array_text[counter]);
    image2.setAttribute("aria-label", array_text[next]);
    inner.replaceChild(array_anchor[counter], inner.children[0]);
  };

  events(
    open_left,
    "click",
    (event) => {
      event.preventDefault();
      counter--;
      if (counter === -1) {
        counter = static_count.length - 1;
      }
      percent_clac(counter);
      open_right.disabled = true;
      open_left.disabled = true;
      inner.classList.add("has-opacity-inner");
      image1.classList.add("has-opacity-image");
      image2.classList.add("has-opacity-image");
      image_fill_right.classList.add("has-right");
      setTimeout(iteiteration_start, 750);
      setTimeout(iteration_end, 1500);
      interval_id = setInterval(interval, 20);
    },
    null
  );

  events(
    open_right,
    "click",
    (event) => {
      event.preventDefault();
      counter++;
      if (counter === static_count.length) {
        counter = 0;
      }
      percent_clac(counter);
      open_right.disabled = true;
      open_left.disabled = true;
      inner.classList.add("has-opacity-inner");
      image1.classList.add("has-opacity-image");
      image2.classList.add("has-opacity-image");
      image_fill_left.classList.add("has-left");
      setTimeout(iteiteration_start, 750);
      setTimeout(iteration_end, 1500);
      interval_id = setInterval(interval, 20);
    },
    null
  );

  image1.style.backgroundImage = `url(${array_src[0]}`;
  image2.style.backgroundImage = `url(${array_src[1]}`;
  image_fill_right.style.backgroundImage = `url(${array_src[0]}`;
  image_fill_left.style.backgroundImage = `url(${array_src[1]}`;
  image1.setAttribute("data-href", array_href[0]);
  image2.setAttribute("data-href", array_href[1]);
  image_fill_right.setAttribute("data-href", array_href[0]);
  image_fill_left.setAttribute("data-href", array_href[1]);
  image1.setAttribute("aria-label", array_text[0]);
  image2.setAttribute("aria-label", array_text[1]);
  image_fill_right.setAttribute("aria-label", array_text[0]);
  image_fill_left.setAttribute("aria-label", array_text[1]);
  inner.replaceChild(array_anchor[0], inner.children[0]);
  width = percent;
  percentage.style.width = `${width}%`;

  for ( const index of link_open) {

    events(index, "click", () => {

      window.open(index.getAttribute("data-href"));
    });
  };

  events(button_toggle, "click", () => {
    
    const obj = document.querySelector(".shrink-container");
    obj.classList.toggle("has-shrink");
  });
};
