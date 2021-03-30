<template>
  <div class="update">
    <Nav />
    <Update />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import Update from "@/components/ModifyUser.vue";
import Footer from '@/components/Footer.vue'

export default {
  name: "Sign",
  components: {
    Nav,
    Update,
    Footer
  },
};
</script>