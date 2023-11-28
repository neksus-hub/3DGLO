import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = document.querySelector(".popup-content");

  let width = document.documentElement.clientWidth;

  let count = 0;

  const openPopup = () => {
    animate({
      duration: 100,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modalContent.style.top = 25 * progress + "%";
        modalContent.style.left = 41 + "%";
      },
    });
  };

  const listener = () => {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        width = document.documentElement.clientWidth;
        modal.style.display = `block`;
        if (width > 768) {
          openPopup();
        }
      });
    });
  };

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = `none`;
      count = 0;
      listener();
    }
  });

  listener();
};

export default modal;
