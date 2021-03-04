<script>
import axios from "axios";

export default {
  name: "Publish",
  data() {
    return {
      file: "",
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },

    addPost() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("title", document.getElementById("title").value);
      axios
        .post(`http://localhost:3000/post/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            location.href = "/";
          }
        });
    },
  },
};
</script>

<template>
  <form @submit.prevent="addPost()" enctype="multipart/form-data">
    <label for="title">Write your post</label>
    <input type="text" id="title" />
    <label for="file">Upload File</label>
    <input type="file" ref="file" @change="selectFile" />
    <button>Send</button>
  </form>
</template>

<style>
</style>