import Vue from "vue";
import axios from "axios";

const welcomeFront = {
  template: "#box-front"
};

const welcomeBack = {
  data: function() {
    return {
      errors: [],
      login: null,
      password: null,
      noRobot: null,
      robot: null
    };
  },
  methods: {
    checkForm: function() {
      this.errors = [];
      if (this.login && this.password && this.noRobot && this.robot)
        return true;
      this.errors = [];
      if (!this.login) this.errors.push("Требуется указать логин.");
      if (!this.password) {
        this.errors.push("Укажите пароль.");
      }
      let status = this.errors.length > 0 ? false : true;

      return status;
    },
    validField: function(e) {
      e.target.classList.remove("form__input-text--error");
    },
    invalidField: function(e) {
      e.target.classList.add("form__input-text--error");
    },
    sendForm: function(e) {
      this.url = e.target.action;
      if (this.checkForm()) {
        let fields = {
          login: this.login,
          password: this.password,
          noRobot: this.noRobot,
          robot: this.robot
        };
        axios
          .post(this.url, fields)
          .then(response => {
            alert(
              "Потом будет редирект в админку. Информацию можно посмотреть в консоле"
            );
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log(this.errors);
      }
    }
  },
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
