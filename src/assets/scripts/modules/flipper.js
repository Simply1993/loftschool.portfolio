import Vue from "vue";

const welcomeFront = {
  template: "#box-front"
};

const welcomeBack = {
  template: "#box-back"
};

new Vue({
  el: "#welcome-flipper",
  components: {
    welcomeFront,
    welcomeBack
  },
  data: {
    sideToShow: "welcomeFront"
  },
  template: "#welcome"
});

new Vue({
  el: "#btn",
  methods: {
    flip() {
      //console.log("test");
    }
  },
  template: "#btn-show"
});
