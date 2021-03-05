<template>
  <div class="onepost">
    <Nav />
    <h1>This is the page of an other user</h1>
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