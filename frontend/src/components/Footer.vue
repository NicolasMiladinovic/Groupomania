<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer>
    <p class="footer-text">© Groupomania</p>
  </footer>
</template>

<style lang="scss">
$primary-color: #ec0000;
$secondary-color: #ffd5d7;

a {
  text-decoration: none;
}

body {
  font-family: Roboto;
  margin: 0px;
}

.footer-text {
  margin-top: 12px;
}

footer {
  background-color: $primary-color;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
}
</style>