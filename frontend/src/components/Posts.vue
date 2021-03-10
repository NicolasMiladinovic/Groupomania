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
    dateLocale(date) {
      const dateFormat = new Date(date);
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return dateFormat.toLocaleDateString("fr-FR", options);
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
         <p id="date">{{dateLocale(Posts.date)}}</p>
        <p id="pseudo">
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

</style>