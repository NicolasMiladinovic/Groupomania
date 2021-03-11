<template>
  <v-app class="grey lighten-1">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
  a:link {
    text-decoration: none;
  }

</style>