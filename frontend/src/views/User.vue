<template>
  <div class="user">
    <Nav />
    <h1>This is the user page</h1>
    <ProfileUser />
  </div>
</template>

<script>
import Nav from "@/components/Navbar.vue";
import ProfileUser from "@/components/User.vue";

export default {
  name: "User",
  components: {
    Nav,
    ProfileUser
  },
};
</script>


<style>

</style>