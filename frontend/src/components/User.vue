<script>
import axios from "axios";

export default {
  name: "ProfileUser",
  data() {
    return {
      users: [],
      user_connected_id: localStorage.getItem("user_id"),
    };
  },
  created() {
    this.getOneUser();
  },
  methods: {
    getOneUser() {
      axios
        .get(`http://localhost:3000/auth/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((response) => {
          this.users = response.data;
        });
    },
    deleteUser() {
      axios
        .get(`http://localhost:3000/auth/delete`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((response) => {
          localStorage.removeItem("user");
          localStorage.removeItem("user_id");
          document.location.href = "/";
          console.log(response);
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
      <v-btn depressed color="error" @click="deleteUser()" id="delete">
        Delete account ⚠️
      </v-btn>
    </div>

    <router-link
      :to="{ name: 'OnePost', params: { id: Posts.id } }"
      v-for="Posts in users"
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
  </div>
</template>

<style scoped>
a {
  color: #626262;
}

#user_bio {
  border-bottom: 1px solid black;
  padding: 50px;
  margin-bottom: 50px;
}

#delete {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>