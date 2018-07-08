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
      }
    };
  },
  methods: {
    ...mapActions(["addArticle"]),
    add() {
      this.addArticle(this.newArticle).then(response => {
        this.newArticle.title = "";
        this.newArticle.date = "";
        this.newArticle.content = "";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  font-size: 16px;
  font-weight: 500;
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
}

.article__textarea {
  resize: none;
  line-height: 43px;
  width: 500px;
  font-size: 16px;
}

.article__label {
  left: -9999px;
  position: absolute;
  top: 0;
}

.new-article__title {
  color: $text-color;
  font-size: 16px;
  font-weight: 500;
}
</style>
