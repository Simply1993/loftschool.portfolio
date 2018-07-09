import Vue from "vue";
import axios from "axios";

const post = {
  template: "#post",
  props: {
    post: {
      type: Object,
      default: () => []
    }
  }
};

new Vue({
  el: "#posts-list-wrapper",
  components: {
    post
  },
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
  template: "#posts-list"
});
