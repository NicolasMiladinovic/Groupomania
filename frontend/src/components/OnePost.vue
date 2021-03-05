<script>
import axios from "axios";

export default {
  name: "OnePost",
  data() {
    return {
      post: [],
      users: [],
      user_connected_id: localStorage.getItem('user_id'),
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

    deletePost() {
      console.log('test');
      const post_id = this.$route.params.id;
      axios
        .delete(`http://localhost:3000/post/${post_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            location.href = "/";
          }
        });
    },
  },
};
</script>

<template>
  <div id="post_container">
    <p>Posted by {{ post[0].pseudo }}</p>
    <div v-if="post[0].user_id == user_connected_id" @click="deletePost()">
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