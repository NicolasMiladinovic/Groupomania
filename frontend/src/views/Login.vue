<template>
  <div class="login">
    <Nav />
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