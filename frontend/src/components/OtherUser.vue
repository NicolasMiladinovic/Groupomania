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
          console.log(response);
        });
    },
  },
};
</script>

<template>
  <div>
    <div id="user_bio">
      @{{ users[0].pseudo }} - {{ users[0].name }} {{ users[0].firstname }}
    </div>

    <div>
      <div v-for="Posts in users" :key="Posts.id">
        <router-link :to="{ name: 'OnePost', params: { id: Posts.id } }">
          <div id="post_container">
            <h2>{{ Posts.title }}</h2>
            <img id="img" :src="Posts.imgURL" :alt="Posts.title" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
#user_bio {
  font-size: 40px;
  text-align: center;
  margin: 20px 0px 30px 0px;
  background-color: #fff;
  padding: 30px;
}
</style>