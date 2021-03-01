<template>
  <div class="onepost">
    <Nav />
    <h1>This is the onepost page</h1>
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