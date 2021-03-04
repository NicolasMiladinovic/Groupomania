<script>
import axios from "axios";

export default {
  name: "ProfileUser",
  data() {
    return {
      users: [],
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
  },
};
</script>

<template>
  <div>
    <div id="user_bio">
      {{ users[0].pseudo }} {{ users[0].name }} {{ users[0].firstname }}
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
  width: 90%;
  background: red;
  margin: 10px auto;
}

#post_container {
  margin: 10px auto;
  background: #fff;
  width: 700px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#post_container:hover {
  border: 1px solid grey;
}
</style>