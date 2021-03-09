<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      axios.get(`http://localhost:3000/post/`).then((response) => {
        this.posts = response.data;
        console.log(this.posts);
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
    <router-link
      :to="{ name: 'OnePost', params: { id: Posts.id } }"
      v-for="Posts in posts"
      :key="Posts.id"
    >
      <div id="post_container">
         <p id="date">{{dateLocale(Posts.date)}}</p>
        <p id="pseudo">
          Posted by
          <router-link
            :to="{ name: 'OtherUser', params: { id: Posts.user_id } }"
            >{{ Posts.pseudo }}</router-link
          >
        </p>
        <h2>{{ Posts.title }}</h2>
        <img id="img" :src="Posts.imgURL" :alt="Posts.title" />
      </div>
    </router-link>
  </div>
</template>

<style>
body {
  font-family: sans-serif;
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
  margin: 0 10% 5px 10%;
  border-radius: 5px;
}

#date {
  float: right;
  margin-right: 5px;
  color: #aeaeae
}

#pseudo {
  margin-left: 5px;
  font-style: italic;
  color: #aeaeae
}

@media screen and (max-width: 715px) {
 #post_container {
   width: 90%;
 }
 #img {
   width: 90%;
   margin: 0 0 5px 10px;
 }
}
</style>