import "./modules/flipper";
import "./modules/preloader";

let auth_btn = document.getElementById("btn-auth");
let welcome_box = document.querySelector(".welcome__box");
let back_btn = document.querySelector(".form__button--back");
if (auth_btn != null) {
  auth_btn.addEventListener("click", e => {
    e.preventDefault();
    welcome_box.classList.toggle("welcome__box--active");
    auth_btn.classList.toggle("btn--invisibility");
  });
}
if (back_btn != null) {
  back_btn.addEventListener("click", e => {
    e.preventDefault();
    welcome_box.classList.toggle("welcome__box--active");
    auth_btn.classList.toggle("btn--invisibility");
  });
}
