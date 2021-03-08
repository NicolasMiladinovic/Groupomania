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
  <div id="sign">
    <form id="sign-form" action="#" @submit.prevent="signup">
      <div class="input-form">
        <label for="name">Name</label>
        <input id="name" type="text" minlength="2" required />
      </div>
      <div class="input-form">
        <label for="firstname">Firstname</label>
        <input id="firstname" type="text" minlength="2" required />
      </div>
      <div class="input-form">
        <label for="pseudo">Pseudo</label>
        <input id="pseudo" type="text" minlength="5" required />
      </div>
      <div class="input-form">
        <label for="email">Email</label>
        <input id="email" type="email" required />
      </div>
      <div class="input-form">
        <label for="password">Password</label>
        <input id="password" type="password" minlength="6" required />
      </div>
      <button id="sign-btn" type="submit">Sign Up</button>
    </form>
    <div class="error-message">{{ message }}</div>
  </div>
</template>

<style>
#sign {
  margin: 100px 10%;
  padding-bottom: 200px;
}

#sign-form {
  width: 500px;
  color: #290063;
}

.input-form {
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
}

#sign-btn {
  background-color: #fdd7d7;
  font-size: 16px;
  border-radius: 8px;
}

#sign-btn:hover {
  background-color: white;
}

@media screen and (max-width: 630px) {
  #sign-form {
    width: 85%;
  }
  #sign {
    margin: 60px 5%;
  }
}
</style>