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
      });
    },
    dateLocale(date) {
      const dateFormat = new Date(date);
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return dateFormat.toLocaleDateString("fr-FR", options);
    },
    userConnected() {
      if (localStorage.user !== undefined) {
        this.visible = false;
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
    <router-link
      :to="{ name: 'OnePost', params: { id: Posts.id } }"
      v-for="Posts in posts"
      :key="Posts.id"
    >
      <v-col cols="12" class="d-flex justify-center mb-6" flat tile>
        <v-card id="post">
          <v-img
            :src="Posts.imgURL"
            :alt="Posts.title"
            height="225px"
            width="500px"
            contain
            class="deep-orange lighten-5"
          ></v-img>
          <v-card-title class="deep-orange lighten-5">
            {{ Posts.title }}
          </v-card-title>
          <v-card-text id="pseudo-date" class="deep-orange lighten-5">
            <router-link
              id="pseudo"
              :to="{ name: 'OtherUser', params: { id: Posts.user_id } }"
            >
              {{ Posts.pseudo }}</router-link
            >, {{ dateLocale(Posts.date) }}
          </v-card-text>
        </v-card>
      </v-col>
    </router-link>
    <div id="space"></div>
    <v-btn
      class="btn-addpost"
      v-on:click="toggleModale"
      v-if="!visible"
      outlined
      color="white"
    >
      <span id="addpost">Add Post</span>
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.1,9L15,9.9L5.9,19H5V18.1L14.1,9M17.7,3C17.5,3 17.2,3.1 17,3.3L15.2,5.1L18.9,8.9L20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18.2,3.1 17.9,3 17.7,3M14.1,6.2L3,17.2V21H6.8L17.8,9.9L14.1,6.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z"
        />
      </svg>
    </v-btn>
    <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
  </div>
</template>

<style scoped>

a {
  color:#37474F;
}

#post {
  margin-bottom: -42px;
}

#pseudo-date {
  color: #37474F;
}

#pseudo {
  font-style: italic;
  margin-right: 5px;
}

#pseudo:hover {
  font-size: 110%;
}

.btn-addpost {
  position: fixed;
  top: 100px;
  right: 30px;
  cursor: pointer;
  background-color: #E53935;
}

#space {
  height: 70px;
}

@media screen and (max-width: 900px) {
  #addpost {
    display: none;
  }
  .btn-addpost {
    top: 92%;
  }
}
</style>