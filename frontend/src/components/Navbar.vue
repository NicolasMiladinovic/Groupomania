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
      <span id="signout">Sign Out</span
      ><svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
        />
      </svg>
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
      <v-btn v-if="!visible" outlined color="grey lighten-1"
        >
        <span id="profile"> Profile </span>
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
          />
        </svg>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      visible: true,
      drawer: false,
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
      localStorage.removeItem("admin");
      document.location.href = "/";
    },
  },
  created() {
    this.userConnected();
  },
};
</script>

<style scoped>
.nav a.router-link-exact-active {
  color: yellow;
  border-bottom: solid;
}

@media screen and (max-width: 500px) {
  #signout, #profile {
    display: none;
  }
}
</style>