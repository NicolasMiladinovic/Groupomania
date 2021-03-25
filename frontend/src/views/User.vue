<template>
  <div class="user">
    <Nav />
    <ProfileUser />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import ProfileUser from "@/components/User.vue";
import Footer from '@/components/Footer.vue'

export default {
  name: "User",
  components: {
    Nav,
    ProfileUser,
    Footer
  },
};
</script>


<style>

</style>