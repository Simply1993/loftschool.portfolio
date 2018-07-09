import Vue from "vue";
import axios from "axios";
import helpers from "../../../admin/helpers";

const welcomeFront = {
  template: "#box-front"
};

const welcomeBack = {
  data: function() {
    return {
      errors: [],
      login: "scherbacovAdmin",
      password: "scherbacov1993",
      noRobot: null,
      robot: null,
      success: false,
      unsuccess: false
    };
  },
  methods: {
    loginUser: function(user) {
      axios
        .post("http://webdev-api.loftschool.com/login", user)
        .then(
          response => {
            console.log(response);
            if (response.status === 200) {
              helpers.setTokenTtl(response);
              window.location.href = "./admin";
            }
          },
          error => {
            console.log(error.response.data.error);
            this.errors.push(error.response.data.error);
            this.unsuccess = true;
            setTimeout(() => {
              this.unsuccess = false;
            }, 2000);
          }
        )
        .catch(error => {
          console.error(error);
        });
    },
    checkForm: function() {
      this.errors = [];
      if (this.login && this.password && this.noRobot && this.robot === "yes")
        return true;
      if (!this.login) this.errors.push("Требуется указать логин.");
      if (!this.password) {
        this.errors.push("Укажите пароль.");
      }
      if (!this.noRobot) {
        this.errors.push("Уточните, что вы человек.");
      }
      if (this.robot !== "yes") {
        this.errors.push("Подвердите, что вы человек.");
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
        let user = {
          name: this.login,
          password: this.password
        };
        this.loginUser(user);
      } else {
        this.unsuccess = true;
        setTimeout(() => {
          this.unsuccess = false;
        }, 2000);
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
