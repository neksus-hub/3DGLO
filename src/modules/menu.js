const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const close = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const hendleMenu = function () {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", hendleMenu);
  close.addEventListener("click", hendleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", hendleMenu)
  );
};

export default menu;
