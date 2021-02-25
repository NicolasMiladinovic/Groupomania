<template>
  <div class="signup">
    <Nav />
    <h1>This is the sign up page</h1>
    <Signup />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import Signup from "@/components/Signup.vue";

export default {
  name: "Sign",
  components: {
    Nav,
    Signup
  },
};
</script>