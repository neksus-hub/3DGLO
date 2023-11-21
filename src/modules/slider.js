const slider = function () {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const dotsBlock = document.querySelector(".portfolio-dots");

  let dots = document.querySelectorAll(".dot");

  let timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const removeDots = function () {
    dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      dotsBlock.removeChild(dot);
    });
  };

  const addDots = function () {
    for (let i = 0; i < slides.length; i++) {
      let dot = document.createElement("li");
      dot.classList.add("dot");
      if (slides[i].classList.contains("portfolio-item-active")) {
        dot.classList.add("dot-active");
      }
      dotsBlock.append(dot);
    }
  };

  const prevSlide = function (elems, index, strClass) {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = function (elems, index, strClass) {
    elems[index].classList.add(strClass);
  };

  const autoSlide = function () {
    removeDots();
    addDots();
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  const startSlide = function (timer = 1500) {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = function () {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot", "portfolio-btn")) {
      return;
    }

    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide = currentSlide - 1;
    } else if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  startSlide(timeInterval);
};

export default slider;
