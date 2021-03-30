<script>
import axios from "axios";

export default {
  name: "Update",
  data() {
    return {
      users: [],
      user_connected_id: localStorage.getItem("user_id"),
      message: "",
      email: undefined,
      rules: {
        required: (value) => !!value || "Required.",
        password: (v) =>
          !!(v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "Password must contain an upper case letter, a numeric character, and a special character",
      },
    };
  },
  methods: {
    modifyUser() {
      const name = document.getElementById("name").value;
      const firstname = document.getElementById("firstname").value;
      const pseudo = document.getElementById("pseudo").value;
      const password = document.getElementById("password").value;
      if (
        name.length >= 1 &&
        firstname.length >= 1 &&
        pseudo.length >= 1 &&
        password.length >= 3
      ) {
        axios
          .post(
            `http://localhost:3000/auth/modify`,
            {
              name,
              firstname,
              pseudo,
              password,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.$token}`,
              },
            }
          )
          .then((response) => {
            location.href = "/";
            console.log(response);
          });
      }
    },
  },
};
</script>

<template>
  <div>
    <v-form action="#" @submit.prevent="modifyUser">
      <div id="name-fn">
        <v-text-field
          autofocus="autofocus"
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
        counter="25"
        label="Pseudo"
        pattern="[A-Za-zÀ-ÖØ-öø-ÿ' ._-]+$"
        outlined
      >
      </v-text-field>
      <v-text-field
        v-model="password"
        id="password"
        counter="40"
        label="Password"
        style="min-height: 96px"
        type="password"
        outlined
      ></v-text-field>
      <v-btn type="submit">Update</v-btn>
      <div>{{ message }}</div>
    </v-form>
  </div>
</template>

<style>
</style>