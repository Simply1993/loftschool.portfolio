import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#posts-menu-wrapper",
  data: {
    posts: []
  },
  created() {
    axios
      .get("http://webdev-api.loftschool.com/posts/17")
      .then(
        response => {
          if (response.status === 200) {
            this.posts = response.data;
          }
        },
        error => {
          console.log(error);
        }
      )
      .catch(e => console.error(e));
  },
  template: "#posts-menu"
});
