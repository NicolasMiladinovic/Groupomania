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
          document.location.href = "./";
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
  <v-form id="form-signup" action="#" @submit.prevent="signup">
    <v-text-field id="name" label="Name" outlined></v-text-field>
    <v-text-field id="firstname" label="Firstname" outlined> </v-text-field>
    <v-text-field id="pseudo" label="Pseudo" outlined> </v-text-field>
    <v-text-field id="email" label="Email" outlined> </v-text-field>
    <v-text-field id="password" type="password" label="Password" outlined>
    </v-text-field>
    <v-btn type="submit">Sign Up</v-btn>
  </v-form>
</template>

<style>
#form-signup {
  margin: 50px;
}
</style>