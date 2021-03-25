<template>
  <div class="signup">
    <Nav />
    <Signup />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import Signup from "@/components/Signup.vue";
import Footer from '@/components/Footer.vue'

export default {
  name: "Sign",
  components: {
    Nav,
    Signup,
    Footer
  },
};
</script>