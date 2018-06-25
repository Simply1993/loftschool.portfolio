export var fullscreenMenu = function() {
  let hamburger = document.querySelector(".menu-hamburger"),
    fullscreenMenu = document.querySelector(".fullscreen-menu");

  let addListener = () => {
    hamburger.addEventListener("click", e => {
      e.preventDefault();
      e.currentTarget.classList.toggle("menu-hamburger--active");
      fullscreenMenu.classList.toggle("fullscreen-menu--active");
      document.body.classList.toggle("disable-scroll");
    });
  };

  return {
    init: addListener
  };
};
