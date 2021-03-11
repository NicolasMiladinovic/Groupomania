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
          `http://localhost:3000/post/${post_id}/post`,
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
    dateLocale(date) {
      const dateFormat = new Date(date);
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return dateFormat.toLocaleDateString("fr-FR", options);
    },
  },
};
</script>

<template>
  <v-col
    cols="12"
    class="d-flex justify-center mb-6"
    :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
    flat
    tile
  >
    <v-card>
      <v-card-title class="grey lighten-4"> {{ post[0].title }} </v-card-title>
      <div
        v-if="post[0].user_id == user_connected_id"
        @click="deletePost(post[0].imgURL)"
        id="delete-post"
      >
        X
      </div>
      <v-card-text class="grey lighten-4">
        {{ post[0].pseudo }}, {{ dateLocale(post[0].date) }}
      </v-card-text>
      <v-img
        :src="post[0].imgURL"
        :alt="post[0].title"
        height="425px"
        width="700px"
        contain
        class="grey lighten-5"
      ></v-img>
    </v-card>
  </v-col>
</template>

<style>
</style>