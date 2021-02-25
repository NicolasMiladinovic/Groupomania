<script>
import axios from "axios";

export default {
  name: "Sign",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    signup() {
      const name = document.getElementById("name").value;
      const firstname = document.getElementById("firstname").value;
      const pseudo = document.getElementById("pseudo").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      axios
        .post(
          `http://localhost:3000/auth/signup`,
          {
            name,
            firstname,
            pseudo,
            email,
            password,
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((result) => {
          localStorage.setItem("user", JSON.stringify(result.data));
          document.location.href = "./Login";
        })
        .catch((error) => {
          if (error.response.status === 400) {
            this.message = "User exist";
          }
        });
    },
  },
};
</script>

<template>
  <div id="signup">
    <form action="#" @submit.prevent="signup">
      <label for="name">Name</label>
      <input id="name" type="text" minlength="2" required />
      <label for="firstname">Firstname</label>
      <input id="firstname" type="text" minlength="2" required />
      <label for="pseudo">Pseudo</label>
      <input id="pseudo" type="text" minlength="5" required />
      <label for="email">Email</label>
      <input id="email" type="email" required />
      <label for="password">Password</label>
      <input id="password" type="password" minlength="6" required />
      <button type="submit">Sign Up</button>
    </form>
    <div class="error-message">{{ message }}</div>
  </div>
</template>

<style>
</style>