<script>
import axios from "axios";

export default {
  name: "OnePost",
  data() {
    return {
      post: [],
      users: [],
      user_connected_id: localStorage.getItem("user_id"),
    };
  },
  created() {
    this.getOnePost();
  },
  methods: {
    getOnePost() {
      const post_id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/post/${post_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((response) => {
          this.post = response.data;
          console.log(response);
        });
    },

    deletePost(imgURL) {
      const post_id = this.$route.params.id;
      axios
        .post(
          `http://localhost:3000/post/${post_id}`,
          {
            imgURL,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$token}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            location.href = "/";
            console.log(this.post);
          }
        });
    },
  },
};
</script>

<template>
  <div id="post_container">
    <p>
      Posted by
      <router-link
        :to="{ name: 'OtherUser', params: { id: post[0].user_id } }"
        >{{ post[0].pseudo }}</router-link
      >
    </p>
    <div
      v-if="post[0].user_id == user_connected_id"
      @click="deletePost(post[0].imgURL)"
    >
      Delete
    </div>
    <h2>{{ post[0].title }}</h2>
    <img id="img" :src="post[0].imgURL" :alt="post.title" />
  </div>
</template>

<style>
#post_container {
  margin: 10px auto;
  background: #fff;
  width: 700px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>