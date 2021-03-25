<template>
  <div class="onepost">
    <Nav />
    <OtherProfileUser />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import OtherProfileUser from "@/components/OtherUser.vue";
import Footer from '@/components/Footer.vue'

export default {
  name: "OtherProfile",
  components: {
    Nav,
    OtherProfileUser,
    Footer
  },
};
</script>