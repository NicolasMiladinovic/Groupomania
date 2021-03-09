<template>
  <div class="onepost">
    <Nav />
    <OnePost />
    <Comms />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import OnePost from "@/components/OnePost.vue";
import Comms from "@/components/Comms.vue";

export default {
  name: "Post",
  components: {
    Nav,
    OnePost,
    Comms
  },
};
</script>