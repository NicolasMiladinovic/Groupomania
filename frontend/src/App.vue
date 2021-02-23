<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/login">Log In</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0px;
}

a {
  text-decoration: none;
}

#app {
  background-color: #dae0e6;
}

#nav {
  top: 0;
  border-bottom: 1px solid #edeff1;
  background-color: #ffffff;
  position: sticky;
  height: 48px;
  padding: 0 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
