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
  <div id="log-form">
    <h1>Welcome Back</h1>
    <v-form action="#" @submit.prevent="login">
      <v-text-field id="email" label="email" outlined></v-text-field>
      <v-text-field
        id="password"
        type="password"
        label="password"
        outlined
      ></v-text-field>
      <v-btn id="log-btn" type="submit">Log In</v-btn>
    </v-form>
    <div class="error-message">{{ message }}</div>
  </div>
</template>

<style scoped>
#log-form {
  margin: 50px 30%;
}
</style>