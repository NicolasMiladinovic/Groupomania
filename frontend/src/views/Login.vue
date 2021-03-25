<template>
  <div class="login">
    <Nav />
    <Login />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import Login from "@/components/Login.vue";
import Footer from '@/components/Footer.vue'

export default {
  name: "Log",
  components: {
    Nav,
    Login,
    Footer
  },
};
</script>