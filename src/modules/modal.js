const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupClose = document.querySelector(".popup-close");

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      modal.style.display = `block`;
    })
  );

  popupClose.addEventListener("click", () => {
    modal.style.display = `none`;
  });
};

export default modal;
