const toggleMenu = () => {
  const menu = document.querySelector("menu");
  const body = document.querySelector("body");

  body.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      menu.classList.add("active-menu");
    } else if (
      !e.target.closest(".active-menu") ||
      e.target.classList.contains("close-btn")
    ) {
      menu.classList.remove("active-menu");
    }
  });
};

export default toggleMenu;
