import { fullscreenMenu } from "./modules/fullscreen";
var menu = fullscreenMenu();
menu.init();

//постараться сделать на vue
let btnShowSidebar = document.querySelector(".blog__btn"),
  sidebar = document.querySelector(".blog__sidebar");
if (btnShowSidebar != null && sidebar != null) {
  btnShowSidebar.addEventListener("click", e => {
    e.preventDefault();
    sidebar.classList.toggle("blog__sidebar--active");
  });
}
