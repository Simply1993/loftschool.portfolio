import Stickyfill from "stickyfilljs";

export var blogSidebar = function() {
  let marginArticles = 40,
    articlesList = document.querySelector(".articles"), //postList
    titleArticles = articlesList.querySelectorAll(".articles__item-title"), //blogItems
    sidebarItems = document.querySelectorAll(".nav-blog__item"); //menuItems

  let addListener = () => {
    //scroll to article's header
    sidebarItems.forEach(function(sidebarItem, i) {
      sidebarItem.addEventListener("click", function(e) {
        if (e.target.className === "nav-blog__link") {
          e.preventDefault();
          let top = titleArticles[i].getBoundingClientRect().top,
            needTop = top - marginArticles;
          window.scrollBy({
            top: needTop,
            behavior: "smooth"
          });
        }
      });
    });

    //animate hover sidebarItems
    window.onscroll = function() {
      titleArticles.forEach(function(post, i) {
        let top = post.getBoundingClientRect().top,
          needTop = window.innerHeight / 2;
        if (top <= needTop && top >= marginArticles) {
          sidebarItems.forEach(function(sidebarItem, j) {
            j == i
              ? sidebarItem.classList.add("nav-blog__item--active")
              : sidebarItem.classList.remove("nav-blog__item--active");
          });
        }
      });
    };
  };

  //polyfill position sticky
  var elements = document.querySelectorAll(".sticky");
  console.log(elements);
  Stickyfill.add(elements);

  return {
    init: addListener
  };
};
