<script>
import axios from "axios";

export default {
  name: "Log",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    login() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      axios
        .post(
          `http://localhost:3000/auth/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem(
            "user",
            '{"token":' + JSON.stringify(res.data.token) + "}"
          );
          localStorage.setItem(
            "user_id",
            JSON.stringify(res.data.result[0].id)
          );
          console.log(res);
          location.href = "/";
        })
        .catch((error) => {
          if (error.response.status === 404) {
            this.message = "User not found";
          }
          if (error.response.status === 401) {
            this.message = "Wrong password";
          }
          if (error.response.status === 500) {
            this.message = "Error server";
          }
        });
    },
  },
};
</script>

<template>
  <div>
    <form action="#" @submit.prevent="login">
      <div>
        <label for="email">email</label>
        <input type="email" v-model="email" id="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" v-model="password" id="password" />
      </div>
      <button type="submit">Log In</button>
    </form>
    <div class="error-message">{{ message }}</div>
  </div>
</template>

<style>
</style>