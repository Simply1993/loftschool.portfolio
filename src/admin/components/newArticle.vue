<template lang="pug">
.new-article
  h3.new-article__title Добавить запись
  .new-article__form
    label.article__label(for="title") Название
    input.article__input#title(v-model="newArticle.title" placeholder="Название")
    label.article__label(for="date") Дата
    input.article__input#date(v-model="newArticle.date" placeholder="Дата")
    label.article__label(for="content") Содержание
    textarea.article__textarea#content(v-model="newArticle.content" placeholder="Содержание" rows="3")
    button.btn(@click="add") Добавить
    .article__success(:class='{"article__success--active": success == true}')
      .article__success-message {{textMsg}}
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newArticle: {
        title: "",
        date: "",
        content: ""
      },
      textMsg: "",
      success: false
    };
  },
  methods: {
    ...mapActions(["addArticle"]),
    add() {
      this.addArticle(this.newArticle)
        .then(
          response => {
            this.newArticle.title = "";
            this.newArticle.date = "";
            this.newArticle.content = "";
            this.textMsg = "Добавлена новая статья";
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 2000);
          },
          error => {
            this.textMsg = "Ошибка добавления";
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 2000);
          }
        )
        .catch(e => {
          this.textMsg = "Ошибка добавления";
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 2000);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/layout/mixins";

.article__success {
  color: black;
  position: absolute;
  opacity: 0;
  height: 100px;
  width: 350px;
  top: 50%;
  left: -9999px;
  z-index: 20;
  padding: 20px;
  background-color: rgba(256, 256, 256, 0.9);
  border-radius: 5px;
  box-shadow: 2px 2px 10px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
  &--active {
    opacity: 1;
    left: 50%;
  }
}

.article__success-message {
  display: block;
}

.btn {
  font-size: 16px;
  font-weight: bold;
  color: $white;
  display: inline-block;
  cursor: pointer;
  padding: 10px 15px;
  background-color: $pale-green;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: $green;
  }
}

.new-article {
  font-size: 16px;
}

.new-article__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.article__input,
.article__textarea {
  background-color: $white;
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  font-weight: 400;
  margin-bottom: 20px;
}

.article__input {
  height: 45px;
  width: 300px;
  font-size: 16px;
  @include phones {
    width: 100%;
  }
}

.article__textarea {
  resize: none;
  line-height: 43px;
  width: 500px;
  font-size: 16px;
  @include phones {
    width: 100%;
  }
}

.article__label {
  left: -9999px;
  position: absolute;
  top: 0;
}

.new-article__title {
  color: $text-color;
  font-size: 16px;
  font-weight: bold;
}
</style>
