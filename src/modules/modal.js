const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupClose = document.querySelector(".popup-close");
  const modalContent = document.querySelector(".popup-content");

  let width = document.documentElement.clientWidth;

  let idInterval;
  let count = 0;

  const openPopup = () => {
    count++;
    idInterval = requestAnimationFrame(openPopup);

    if (count <= 23) {
      modalContent.style.top = count * 0.8 + "%";
      console.log(count);
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
          console.log(",jkmit");
          openPopup();
        }
      });
    });
  };

  popupClose.addEventListener("click", () => {
    modal.style.display = `none`;
    modalContent.style.top = "";
    count = 0;
    listener();
  });

  listener();
};

export default modal;
