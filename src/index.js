import timer from "./modules/timer";
import toggleMenu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import valid from "./modules/valid";
import tabs from "./modules/tabs";
import slider from "./modules/slider";

const portfolioSliderClasses = {
  sliderBlockClass: `.portfolio-content`,
  slideClass: `.portfolio-item`,
  dotsBlockClass: `.portfolio-dots`,
  activeSlideClass: `portfolio-item-active`,
  dotClass: `.dot`,
  activeDotClass: `dot-active`,
  buttonClass: `.portfolio-btn`,
};

timer("20 december 2023");
toggleMenu();
modal();
scroll();
valid();
tabs();
slider(
  portfolioSliderClasses.sliderBlockClass,
  portfolioSliderClasses.slideClass,
  portfolioSliderClasses.dotsBlockClass,
  portfolioSliderClasses.activeSlideClass,
  portfolioSliderClasses.dotClass,
  portfolioSliderClasses.activeDotClass,
  portfolioSliderClasses.buttonClass
);
