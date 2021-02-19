<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signup">Sign Up</router-link>|
      <router-link to="/login">Log In</router-link>
    </div>
    <router-view />
    <footer id="footer">
      <router-link to="/">Home</router-link>
    </footer>
  </div>
</template>

<style>
#nav {
  top: 0;
}

#footer { 
  bottom: 0;
}

#nav,
#footer {
  background-color: black;
  position: sticky;
}

#nav,
#footer a.router-link-exact-active {
  color: #42b983;
}
</style>
