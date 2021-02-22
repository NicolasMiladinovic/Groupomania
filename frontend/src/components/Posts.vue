<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getAllPosts();
    console.log("test1");
  },
  methods: {
    getAllPosts() {
      axios.get(`http://localhost:3000/post/`).then((response) => {
        this.posts = response.data;
        console.log(this.posts);
      });
    },
  },
};
</script>

<template>
  <div>
    <router-link
      :to="{ name: 'Home', params: { id: Posts.id } }"
      v-for="Posts in posts"
      :key="Posts.id"
    >
      <div>
        <h2>{{ Posts.title }}</h2>
        <p>{{ Posts.pseudo }} {{ Posts.name }}</p>
        <img :src="Posts.imgURL" :alt="Posts.title" />
      </div>
    </router-link>
  </div>
</template>

<style>
img{
  width: 400px;
}
</style>