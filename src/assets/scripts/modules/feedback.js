import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#feedback-wrapper",
  data: {
    errors: [],
    name: null,
    email: null,
    msg: null,
    url: null
  },
  methods: {
    sendForm: function(e) {
      e.preventDefault();
      this.url = e.target.action;
      if (this.checkForm()) {
        let fields = {
          name: "Имя",
          email: "Почта",
          msg: "Сообщение"
        };
        axios
          .post(this.url, fields)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
      } else {
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
    }
  },
  template: "#feedback"
});
