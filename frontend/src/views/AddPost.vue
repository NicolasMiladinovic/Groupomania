<template>
  <div>
    <Nav />
    <h1>This the add post page</h1>
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