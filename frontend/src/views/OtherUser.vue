<template>
  <div class="onepost">
    <Nav />
    <OtherProfileUser />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import OtherProfileUser from "@/components/OtherUser.vue";

export default {
  name: "OtherProfile",
  components: {
    Nav,
    OtherProfileUser
  },
};
</script>