<template>
  <div class="nav">
    <router-link to="/">Home</router-link> 
    <router-link v-if="visible" to="/signup"> | Sign Up | </router-link>
    <router-link v-if="visible" to="/login">Log In</router-link>
    <div v-if="!visible" @click="disconnection()"> | Log Out</div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      visible: true,
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
        localStorage.removeItem('user');
        document.location.href = "/";
    }
  },
  created() {
    this.userConnected();
  },
};
</script>

<style>
.nav {
  top: 0;
  border-bottom: 1px solid #edeff1;
  background-color: #ffffff;
  position: sticky;
  height: 48px;
  padding: 0 20px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>