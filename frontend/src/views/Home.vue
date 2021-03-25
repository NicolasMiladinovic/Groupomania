<template>
  <div class="home">
    <Nav/>
    <Footer/>
    <Posts/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Navbar.vue'
import Posts from '@/components/Posts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Posts,
    Footer
  }
}
</script>
