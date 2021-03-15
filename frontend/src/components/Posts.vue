<script>
import axios from "axios";
import Publish from "./AddPost";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
      visible: true,
      revele: false,
    };
  },
  components: {
    modale: Publish,
  },
  mounted() {
    this.getAllPosts();
  },
  created() {
    this.userConnected();
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
    userConnected() {
      if (localStorage.user !== undefined) {
        console.log("Nav: User is connected");
        this.visible = false;
      } else {
        console.log("Nav: User is not connected");
      }
    },
    toggleModale() {
      this.revele = !this.revele;
    },
  },
};
</script>

<template>
  <div>
    <v-btn
      class="btn-addpost"
      v-on:click="toggleModale"
      v-if="!visible"
      outlined
      color="grey lighten-1"
      >Add Post
    </v-btn>
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
    <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
  </div>
</template>

<style>
.btn-addpost {
  position: fixed;
  top: 100px;
  right: 30px;
  cursor: pointer;
}
</style>