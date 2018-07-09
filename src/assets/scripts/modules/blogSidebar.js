import Stickyfill from "stickyfilljs";

export var blogSidebar = function() {
  let marginArticles = 40,
    articlesList = document.querySelector(".articles"), //postList
    titleArticles = articlesList.getElementsByClassName("articles__item-title"), //blogItems
    sidebarItems = document.getElementsByClassName("nav-blog__item"); //menuItems

  let addListener = () => {
    //Array.prototype.slice.call
    //scroll to article's header
    for (var i = 0; i < sidebarItems.length; i++) {
      sidebarItem[i].addEventListener("click", function(e) {
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
    }
    /*sidebarItems.forEach(function(sidebarItem, i) {
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
    });*/

    //animate hover sidebarItems
    window.onscroll = function() {
      for (var i = 0; i < titleArticles.length; i++) {
        let top = titleArticles[i].getBoundingClientRect().top,
          needTop = window.innerHeight / 2;
        if (top <= needTop && top >= marginArticles) {
          for (var j = 0; j < sidebarItems.length; j++) {
            j == i
              ? sidebarItems[j].classList.add("nav-blog__item--active")
              : sidebarItems[j].classList.remove("nav-blog__item--active");
          }
          /*sidebarItems.forEach(function(sidebarItem, j) {
            j == i
              ? sidebarItem.classList.add("nav-blog__item--active")
              : sidebarItem.classList.remove("nav-blog__item--active");
          });*/
        }
      }
      /*titleArticles.forEach(function(post, i) {
        let top = post.getBoundingClientRect().top,
          needTop = window.innerHeight / 2;
        if (top <= needTop && top >= marginArticles) {
          sidebarItems.forEach(function(sidebarItem, j) {
            j == i
              ? sidebarItem.classList.add("nav-blog__item--active")
              : sidebarItem.classList.remove("nav-blog__item--active");
          });
        }
      });*/
    };
  };

  //polyfill position sticky
  var elements = document.querySelectorAll(".sticky");
  Stickyfill.add(elements);

  return {
    init: addListener
  };
};
