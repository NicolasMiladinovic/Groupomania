<script>
import axios from "axios";

export default {
  name: "OnePost",
  data() {
    return {
      post: [],
      users: [],
      user_connected_id: localStorage.getItem("user_id"),
      admin: localStorage.getItem("admin"),
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
            location.href = "/";
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
      <v-card-title class="deep-orange lighten-5"> {{ post[0].title }} </v-card-title>
      <div
        v-if="post[0].user_id == user_connected_id || admin == 1"
        @click="deletePost(post[0].imgURL)"
        id="delete-post"
      >
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          />
        </svg>
      </div>

      <v-card-text class="deep-orange lighten-5">
        <router-link
          id="pseudo"
          :to="{ name: 'OtherUser', params: { id: post[0].user_id } }"
        >
          {{ post[0].pseudo }}</router-link
        >
        , {{ dateLocale(post[0].date) }}
      </v-card-text>
      <v-img
        :src="post[0].imgURL"
        :alt="post[0].title"
        height="425px"
        width="700px"
        contain
        class="deep-orange lighten-5"
      ></v-img>
    </v-card>
  </v-col>
</template>

<style>
#delete-post {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>