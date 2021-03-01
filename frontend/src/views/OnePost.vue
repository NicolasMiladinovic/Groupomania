<template>
  <div class="onepost">
    <Nav />
    <h1>This is the onepost page</h1>
    <OnePost />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import OnePost from "@/components/OnePost.vue";

export default {
  name: "Post",
  components: {
    Nav,
    OnePost,
  },
};
</script>