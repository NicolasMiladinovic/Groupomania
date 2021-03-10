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
          console.log(this.users);
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
      @{{ users[0].pseudo }} - {{ users[0].name }} {{ users[0].firstname }}
      <div id="delete" @click="deleteUser()">Delete account ⚠️</div>
    </div>

    <div>
      <div v-for="Posts in users" :key="Posts.id">
        <router-link :to="{ name: 'OnePost', params: { id: Posts.id } }">
          <div id="post_container">
            <p id="date">{{dateLocale(Posts.date)}}</p>
            <h2>{{ Posts.title }}</h2>
            <img id="img" :src="Posts.imgURL" :alt="Posts.title" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>

</style>