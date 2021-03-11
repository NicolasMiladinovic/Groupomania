<template>
  <v-app-bar app>
    <router-link to="/">
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Groupo<span class="font-weight-medium">mania</span> </span>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn
      v-if="!visible"
      @click="disconnection()"
      outlined
      color="grey lighten-1"
    >
      <span>Sign Out</span>
    </v-btn>
    <router-link to="/signup">
      <v-btn v-if="visible" outlined color="grey lighten-1">
        <span> Sign Up </span>
      </v-btn>
    </router-link>
    <router-link to="/login">
      <v-btn v-if="visible" outlined color="grey lighten-1">
        <span> Log In </span>
      </v-btn>
    </router-link>
    <router-link to="/user">
      <v-btn v-if="!visible" outlined color="grey lighten-1">Profile</v-btn>
    </router-link>
    <router-link to="/compose">
      <v-btn v-if="!visible" outlined color="grey lighten-1">Add Post</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      visible: true,
      drawer: false
    };
  },
  methods: {
    userConnected() {
      if (localStorage.user !== undefined) {
        console.log("Nav: User is connected");
        this.visible = false;
      } else {
        console.log("Nav: User is not connected");
      }
    },
    disconnection() {
      localStorage.removeItem("user");
      localStorage.removeItem("user_id");
      document.location.href = "/";
    },
  },
  created() {
    this.userConnected();
  },
};
</script>

<style>
.nav a.router-link-exact-active {
  color: yellow;
  border-bottom: solid;
}
</style>