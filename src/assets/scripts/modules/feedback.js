import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#feedback-wrapper",
  data: {
    errors: [],
    name: null,
    email: null,
    msg: null,
    url: null,
    success: false,
    unsuccess: false
  },
  methods: {
    sendForm: function(e) {
      this.url = e.target.action;
      if (this.checkForm()) {
        let fields = {
          name: this.name,
          email: this.email,
          msg: this.msg
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
    },
    checkForm: function() {
      this.errors = [];
      if (this.name && this.email && this.msg) return true;
      this.errors = [];
      if (!this.name) this.errors.push("Требуется указать имя.");
      if (!this.email) {
        this.errors.push("Укажите электронную почту.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Укажите корректный адрес электронной почты.");
      }
      if (!this.msg) this.errors.push("Требуется написать сообщение.");
      let status = this.errors.length > 0 ? false : true;
      return status;
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    invalidField: function(e) {
      e.target.classList.add("form__input-text--error");
    },
    validField: function(e) {
      e.target.classList.remove("form__input-text--error");
    }
  },
  template: "#feedback"
});
