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
body {
  font-family: sans-serif;
}

#app-addpost {
  height: 80vh;
  box-sizing: border-box;
}

#addpost {
  background-color: #fff;
  width: 600px;
  padding: 30px;
  margin: 100px auto;
}

#label-choose {
  margin-bottom: 7px;
}

.input-form-addpost {
  display: flex;
  flex-direction: column;
}

.input-addpost-title {
  height: 55px;
  margin: 5px 0 30px 0;
}

textarea {
  resize: none;
}

#send-btn {
  margin-top: 30px;
  color: #fff;
  background-color: #290063;
  border-radius: 8px;
  height: 30px;
  width: 50px;
}

#send-btn:hover {
  background-color: #5e09d6;
}

@media screen and (max-width: 710px) {
  #addpost {
    width: 80%;
  }
}
</style>