<script>
import axios from "axios";

export default {
  name: "ProfileUser",
  data() {
    return {
      users: [],
      user_connected_id: localStorage.getItem("user_id"),
      items: [
        { delete: "Delete your profile" },
        { infos: "Modify your profile" },
      ],
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
      <div class="text-center" id="delete">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="error" dark v-bind="attrs" v-on="on">
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M17 12C16.87 12 16.76 12.09 16.74 12.21L16.55 13.53C16.25 13.66 15.96 13.82 15.7 14L14.46 13.5C14.35 13.5 14.22 13.5 14.15 13.63L13.15 15.36C13.09 15.47 13.11 15.6 13.21 15.68L14.27 16.5C14.25 16.67 14.24 16.83 14.24 17C14.24 17.17 14.25 17.33 14.27 17.5L13.21 18.32C13.12 18.4 13.09 18.53 13.15 18.64L14.15 20.37C14.21 20.5 14.34 20.5 14.46 20.5L15.7 20C15.96 20.18 16.24 20.35 16.55 20.47L16.74 21.79C16.76 21.91 16.86 22 17 22H19C19.11 22 19.22 21.91 19.24 21.79L19.43 20.47C19.73 20.34 20 20.18 20.27 20L21.5 20.5C21.63 20.5 21.76 20.5 21.83 20.37L22.83 18.64C22.89 18.53 22.86 18.4 22.77 18.32L21.7 17.5C21.72 17.33 21.74 17.17 21.74 17C21.74 16.83 21.73 16.67 21.7 16.5L22.76 15.68C22.85 15.6 22.88 15.47 22.82 15.36L21.82 13.63C21.76 13.5 21.63 13.5 21.5 13.5L20.27 14C20 13.82 19.73 13.65 19.42 13.53L19.23 12.21C19.22 12.09 19.11 12 19 12H17M10 14C5.58 14 2 15.79 2 18V20H11.68A7 7 0 0 1 11 17A7 7 0 0 1 11.64 14.09C11.11 14.03 10.56 14 10 14M18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5C17.16 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5Z"
                />
              </svg>
            </v-btn>
          </template>
          <v-list id="list">
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title @click="deleteUser()">
                <span id="delete-profile"> {{ item.delete }} </span>
                <router-link to="/modify">
                  {{ item.infos }}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <router-link
      :to="{ name: 'OnePost', params: { id: Posts.id } }"
      v-for="Posts in users"
      :key="Posts.id"
    >
      <v-col
        v-if="Posts.id != null"
        cols="12"
        class="d-flex justify-center mb-6"
        flat
        tile
      >
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
            <span id="pseudo">{{ Posts.pseudo }}</span
            >, {{ dateLocale(Posts.date) }}
          </v-card-text>
        </v-card>
      </v-col>
    </router-link>
    <div id="space"></div>
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

#post {
  margin-bottom: -42px;
}

#pseudo {
  font-style: italic;
}

#space {
  height: 70px;
}

#delete {
  position: absolute;
  top: 10px;
  right: 10px;
}

#delete-profile {
  cursor: pointer;
}
</style>