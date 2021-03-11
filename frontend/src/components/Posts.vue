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
      <v-col cols="12" class="d-flex justify-center mb-6" flat tile>
        <v-card>
          <v-img
            :src="Posts.imgURL"
            :alt="Posts.title"
            height="225px"
            width="500px"
            contain
            class="grey lighten-5"
          ></v-img>
          <v-card-title class="grey lighten-4">
            {{ Posts.title }}
          </v-card-title>
          <v-card-text class="grey lighten-4">
            {{ Posts.pseudo }}, {{ dateLocale(Posts.date) }}
          </v-card-text>
        </v-card>
      </v-col>
    </router-link>
  </div>
</template>

<style>
</style>