<template>
  <div class="login">
    <Nav />
    <h1>This is the login page</h1>
    <Login />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Log",
  components: {
    Nav,
    Login,
  },
};
</script>