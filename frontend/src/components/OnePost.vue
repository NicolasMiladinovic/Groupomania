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
  <div id="addpost_container">
    <p id="date">{{ dateLocale(post[0].date) }}</p>
    <p id="pseudo">
      Posted by
      <router-link
        :to="{ name: 'OtherUser', params: { id: post[0].user_id } }"
        >{{ post[0].pseudo }}</router-link
      >
    </p>
    <div
      v-if="post[0].user_id == user_connected_id"
      @click="deletePost(post[0].imgURL)"
      id="delete-post"
    >
      X
    </div>
    <h2>{{ post[0].title }}</h2>
    <img id="img" :src="post[0].imgURL" :alt="post.title" />
  </div>
</template>

<style>
body {
  font-family: sans-serif;
}

h2 {
  margin-left: 10px;
}

#addpost_container {
  margin: 10px auto;
  background: #fff;
  width: 700px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#date {
  float: right;
  margin-right: 5px;
  color: #aeaeae;
}

#pseudo {
  margin-left: 5px;
  font-style: italic;
  color: #aeaeae;
}

#delete-post {
  position: absolute;
  margin-left: 680px;
  cursor: pointer;
}

@media screen and (max-width: 715px) {
  #addpost_container {
    width: 90%;
  }
  #img {
    width: 90%;
  }
  #delete-post {
    position: initial;
    margin: 0;
    margin-right: 5px;
    float: right;
  }
}
</style>