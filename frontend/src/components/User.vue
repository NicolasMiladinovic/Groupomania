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
body {
  font-family: sans-serif;
}

#user_bio {
  font-size: 40px;
  text-align: center;
  margin: 20px 0px 30px 0px;
  background-color: #fff;
  padding: 30px;
}

#delete {
  font-size: 25px;
  margin-top: 10px;
  color: grey;
}

#delete:hover {
  color: red;
}

#date {
  float: right;
  margin-right: 5px;
  color: #aeaeae
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

h2 {
  margin-left: 10px;
}

#img {
  width: 500px;
  max-height: 398px;
  display: inline;
  align-items: center;
  margin: 0 0 5px 10px;
}

@media screen and (max-width: 715px) {
 #post_container {
   width: 90%;
 }
 #img {
   width: 90%;
 }
}
</style>