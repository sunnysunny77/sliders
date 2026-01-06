let scrollY = 0;

let positive = false;

const move = (obj) => {

  const scroll_pos = window.scrollY;

  if (scroll_pos > scrollY) {

    positive = true;
  } else if (scroll_pos < scrollY)  {

    positive = false;
  };

  scrollY = window.scrollY;

  obj.forEach((index) => {

    if (!index.isIntersecting && !positive) {

      index.target.classList.remove("has-bottom");
      index.target.classList.add("has-move");
      return;
    };

    index.target.classList.add("has-bottom");
  });
};

const has_test = (obj) => {

  const observer_move = new IntersectionObserver(move, {

    rootMargin: "0px",
  });

  obj.forEach(index => observer_move.observe(index));
};

export const slider_8 = () => {

  has_test(document.querySelectorAll(".has-test"));
};