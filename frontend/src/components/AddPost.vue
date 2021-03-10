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
  <div id="app-addpost">
    <div id="addpost">
      <form @submit.prevent="addPost()" enctype="multipart/form-data">
        <div class="input-form-addpost">
          <label for="title">Write your post</label>
          <textarea
            type="text"
            id="title"
            class="input-addpost-title"
          ></textarea>
        </div>
        <div class="input-form-addpost">
          <label id="label-choose" for="file">Choose your image</label>
          <input type="file" ref="file" @change="selectFile" />
        </div>
        <button id="send-btn">Send</button>
      </form>
    </div>
  </div>
</template>

<style>

</style>