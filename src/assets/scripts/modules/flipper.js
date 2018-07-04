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
      robot: null,
      success: false,
      unsuccess: false
    };
  },
  methods: {
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
        let fields = {
          login: this.login,
          password: this.password,
          noRobot: this.noRobot,
          robot: this.robot
        };
        axios
          .post(this.url, fields)
          .then(response => {
            this.success = true;
            setTimeout(() => {
              this.success = false;
              console.log(e);
              e.target.reset();
            }, 2000);
            console.log(response);
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
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
