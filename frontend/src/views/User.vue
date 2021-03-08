<template>
  <div class="user">
    <Nav />
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