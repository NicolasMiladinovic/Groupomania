<template>
  <div>
    <Nav />
    <AddPost />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import AddPost from "@/components/AddPost.vue";

export default {
  name: "Publish",
  components: {
    Nav,
    AddPost,
  },
};
</script>

<style>
</style>