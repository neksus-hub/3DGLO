const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = document.querySelector(".popup-content");

  let width = document.documentElement.clientWidth;

  let idInterval;
  let count = 0;

  const openPopup = () => {
    count++;
    idInterval = requestAnimationFrame(openPopup);

    if (count <= 23) {
      modalContent.style.top = count * 0.8 + "%";
    } else {
      cancelAnimationFrame(idInterval);
    }
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
