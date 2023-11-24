const slider = function (
  sliderBlockClass,
  slideClass,
  dotsBlockClass,
  activeSlideClass,
  dotClass,
  activeDotClass,
  buttonClass
) {
  const sliderBlock = document.querySelector(sliderBlockClass);
  const dotsBlock = document.querySelector(dotsBlockClass);

  let slides = document.querySelectorAll(slideClass);
  let dots = document.querySelectorAll(dotClass);

  let timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  if (
    sliderBlockClass !== `.portfolio-content` ||
    slideClass !== `.portfolio-item` ||
    dotsBlockClass !== `.portfolio-dots` ||
    activeSlideClass !== `portfolio-item-active` ||
    dotClass !== `.dot` ||
    activeDotClass !== `dot-active` ||
    buttonClass !== `.portfolio-btn`
  ) {
    return;
  }

  const removeDots = function () {
    dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      dotsBlock.removeChild(dot);
    });
  };

  const addDots = function () {
    slides = document.querySelectorAll(slideClass);
    for (let i = 0; i <= slides.length - 1; i++) {
      let dot = document.createElement("li");
      dot.classList.add("dot");
      if (slides[i].classList.contains(activeSlideClass)) {
        dot.classList.add(activeDotClass);
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
    prevSlide(slides, currentSlide, activeSlideClass);
    prevSlide(dots, currentSlide, activeDotClass);

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, activeSlideClass);
    nextSlide(dots, currentSlide, activeDotClass);
    removeDots();
    addDots();
  };

  const startSlide = function (timer = 1500) {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = function () {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }

    prevSlide(slides, currentSlide, activeSlideClass);
    removeDots();
    addDots();

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
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

    nextSlide(slides, currentSlide, activeSlideClass);
    removeDots();
    addDots();
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
