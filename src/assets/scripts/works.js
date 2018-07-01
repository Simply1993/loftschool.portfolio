import "./modules/feedback";
import "./modules/preloader";
import "./modules/slider";
import { fullscreenMenu } from "./modules/fullscreen";
var menu = fullscreenMenu();
menu.init();

//постараться переписать на vue.js на след.неделе
let btn_down = document.querySelector(".btn-down");
let btn_up = document.querySelector(".btn-up");
if (btn_down != null) {
  btn_down.addEventListener("click", function(e) {
    e.preventDefault();
    let id = btn_down.getAttribute("href");
    let top = document.querySelector(id).offsetTop;
    window.scroll({
      top: top,
      behavior: "smooth"
    });
  });
}

if (btn_up != null) {
  btn_up.addEventListener("click", function(e) {
    e.preventDefault();
    let id = btn_down.getAttribute("href");
    let top = document.querySelector(id).offsetTop;
    window.scroll({
      top: top,
      behavior: "smooth"
    });
  });
}
