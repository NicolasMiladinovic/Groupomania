<template>
  <div class="login">
    <h1>This is the login page</h1>
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'Log',
  components: {
    Login
  }

}
</script>