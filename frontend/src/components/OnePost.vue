<script>
import axios from "axios";

export default {
  name: "OnePost",
  data() {
    return {
      post: [],
    };
  },
  mounted() {
    this.getOnePost();
  },
  methods: {
    getOnePost() {
      const post_id = this.$route.params.id;
      console.log(post_id);
      axios
        .get(`http://localhost:3000/post/${post_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((response) => {
          this.post = response.data;
          console.log(this.post);
        });
    },
  },
};
</script>

<template>
  <div id="post_container">
    <p>Posted by {{ post[0].pseudo }}</p>
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