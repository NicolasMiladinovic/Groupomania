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
      if (
        name.length > 1 &&
        firstname.length > 1 &&
        pseudo.length > 1 &&
        email.length > 1 &&
        password.length > 3
      ) {
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
          .then((res) => {
            localStorage.setItem(
              "user",
              '{"token":' + JSON.stringify(res.data.token) + "}"
            );
            localStorage.setItem(
              "user_id",
              JSON.stringify(res.data.result[0].id)
            );
            localStorage.setItem(
              "admin",
              JSON.stringify(res.data.result[0].admin)
            );
            location.href = "/";
          })
          .catch((error) => {
            if (error.response.status === 400) {
              this.message = "User exist";
            }
          });
      }
    },
  },
};
</script>

<template>
  <div id="form-signup">
    <h1>Welcome</h1>
    <v-form action="#" @submit.prevent="signup">
      <div id="name-fn">
        <v-text-field
          class="required"
          id="name"
          label="Name"
          pattern="[A-Za-zÀ-ÖØ-öø-ÿ' ._-]+$"
          outlined
        ></v-text-field>
        <v-text-field
          id="firstname"
          label="Firstname"
          pattern="[A-Za-zÀ-ÖØ-öø-ÿ' ._-]+$"
          outlined
        >
        </v-text-field>
      </div>
      <v-text-field
        id="pseudo"
        label="Pseudo"
        pattern="[A-Za-zÀ-ÖØ-öø-ÿ' ._-]+$"
        outlined
      >
      </v-text-field>
      <v-text-field
        id="email"
        label="Email"
        pattern="[A-Za-zÀ-ÖØ-öø-ÿ' ._-]+$"
        outlined
      >
      </v-text-field>
      <v-text-field id="password" type="password" label="Password" outlined>
      </v-text-field>
      <v-btn type="submit">Sign Up</v-btn>
      <div>{{ message }}</div>
    </v-form>
  </div>
</template>

<style>
#form-signup {
  margin: 50px 30%;
}

#name-fn {
  display: flex;
  flex-direction: row;
}
</style>