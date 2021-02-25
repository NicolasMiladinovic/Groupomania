<template>
  <div class="home">
    <Nav/>
    <Posts/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Navbar.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Posts
  }
}
</script>
