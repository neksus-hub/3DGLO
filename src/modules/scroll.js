const scroll = () => {
  const menu = document.querySelector("menu");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollBtn = document.querySelector('a[href*="#service-block"]');
  const serviceBlock = document.querySelector("#service-block");

  for (let item of menuItems) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const blockId = item.getAttribute("href");
      document.querySelector("" + blockId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  scrollBtn.addEventListener("click", function (event) {
    event.preventDefault();
    serviceBlock.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};

export default scroll;
