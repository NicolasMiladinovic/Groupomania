<template>
  <div class="signup">
    <Nav />
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