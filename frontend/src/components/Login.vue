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
  <div id="log">
    <div id="log-form">
      <h1>Welcome Back</h1>
      <form action="#" @submit.prevent="login">
        <div class="input-form">
          <label for="email">email</label>
          <input type="email" v-model="email" id="email" />
        </div>
        <div class="input-form">
          <label for="password">password</label>
          <input type="password" v-model="password" id="password" />
        </div>
        <button id="log-btn" type="submit">Log In</button>
      </form>
      <div class="error-message">{{ message }}</div>
    </div>
    <div id="deco"><img id="img-deco" src="/Logo_Groupomania/icon-above-font.png" alt=""></div>
  </div>
</template>

<style>

</style>