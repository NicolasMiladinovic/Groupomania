<script>
import axios from "axios";

export default {
  name: "Publish",
  props: ["revele", "toggleModale"],
  data() {
    return {
      file: "",
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
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
  <div id="app-addpost" v-if="revele">
    <div class="overlay"></div>

    <v-card id="modale" class="mx-auto" max-width="1000" outlined>
      <div class="btn-modale" v-on:click="toggleModale">X</div>
      <div id="addpost">
        <form @submit.prevent="addPost()" enctype="multipart/form-data">
          <div class="input-form-addpost">
            <h1><label for="title">Write your post</label></h1>
            <textarea
              type="text"
              id="title"
              class="input-addpost-title"
            ></textarea>
          </div>
          <div class="input-form-addpost">
            <h2>
              <label id="label-choose" for="file">Choose your image</label>
            </h2>
            <input type="file" ref="file" @change="selectFile" />
          </div>
          <button id="send-btn">Send</button>
        </form>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
#app-addpost {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#modale {
  background: #f1f1f1;
  color: black;
  padding: 50px;
  position: fixed;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.input-form-addpost {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

#send-btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>