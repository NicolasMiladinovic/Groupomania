<script>
import axios from "axios";

export default {
  name: "OtherUser",
  data() {
    return {
      users: [],
    };
  },

  created() {
    this.getOtherUser();
  },
  methods: {
    getOtherUser() {
      const userId = this.$route.params.id;
      axios
        .get(`http://localhost:3000/auth/profile/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((response) => {
          this.users = response.data;
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
    <div id="user_bio">
      <h1>
        @{{ users[0].pseudo }} - {{ users[0].name }} {{ users[0].firstname }}
      </h1>
    </div>

    <div>
      <router-link
        :to="{ name: 'OnePost', params: { id: Posts.id } }"
        v-for="Posts in users"
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
            <v-card-text class="deep-orange lighten-5">
            <span id="pseudo">{{ Posts.pseudo }}</span>  
              , {{ dateLocale(Posts.date) }}
            </v-card-text>
          </v-card>
        </v-col>
      </router-link>
    </div>
    <div id="space"></div>
  </div>
</template>

<style>
a {
  color: #626262;
}

#post {
  margin-bottom: -42px;
}

#pseudo {
  font-style: italic;
}

#space {
  height: 70px;
}

#user_bio {
  border-bottom: 1px solid black;
  padding: 50px;
  margin-bottom: 50px;
}
</style>