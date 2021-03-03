<script>
import axios from "axios";

export default {
  name: "Publish",
  data() {
    return {
      file: [],
    };
  },
  methods: {
    addPost() {
      const title = document.getElementById("title").value;
      const file = 
      axios
        .post(
          `http://localhost:3000/post/`,
          {
            title,
            file,
          },
          {
            headers: {
              "Content-type": "multipart/form-data",
              Authorization: `Bearer ${this.$token}`,
            },
          }
        )
        .then((result) => {
          if (result.status === 201) {
            document.location.href = "./";
          }
        });
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="addPost()">
      <input id="title" type="text" />
      <input id="file" type="file" />
      <button>Publish</button>
    </form>
  </div>
</template>

<style>
</style>