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
      :to="{ name: 'OnePost', params: { id: Posts.id } }"
      v-for="Posts in posts"
      :key="Posts.id"
    >
      <div id="post_container">
        <p>
          Posted by
          <router-link
            :to="{ name: 'OtherUser', params: { id: Posts.user_id } }"
            >{{ Posts.pseudo }}</router-link
          >
        </p>
        <h2>{{ Posts.title }}</h2>
        <img id="img" :src="Posts.imgURL" :alt="Posts.title" />
      </div>
    </router-link>
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

#post_container:hover {
  border: 1px solid grey;
}

#img {
  max-width: 700px;
  max-height: 398px;
  display: inline;
}
</style>