<template>
  <div class="nav">
    <router-link to="/"
      ><img
        id="logo"
        src="/Logo_Groupomania/icon-left-font-monochrome-white.png"
      />
    </router-link>
    <router-link v-if="visible" to="/signup" class="link" id="signup"
      >Sign Up</router-link
    >
    <router-link v-if="visible" to="/login" class="link" id="login"
      >Log In</router-link
    >
    <div v-if="!visible" @click="disconnection()" class="link linklog">
      Log Out
    </div>
    <router-link v-if="!visible" to="/user" class="link linklog"
      >Profile</router-link
    >
    <router-link v-if="!visible" to="/compose" class="link linklog"
      >Add Post</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      visible: true,
    };
  },
  methods: {
    userConnected() {
      if (localStorage.user !== undefined) {
        console.log("Nav: User is connected");
        this.visible = false;
      } else {
        console.log("Nav: User is not connected");
      }
    },
    disconnection() {
      localStorage.removeItem("user");
      localStorage.removeItem("user_id");
      document.location.href = "/";
    },
  },
  created() {
    this.userConnected();
  },
};
</script>

<style>
.nav {
  top: 0;
  border-bottom: 1px solid #edeff1;
  background-color: #290063;
  position: sticky;
  height: 48px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
}

.nav a.router-link-exact-active {
  color: yellow;
  border-bottom: solid;
}

#logo {
  width: 170px;
  margin-top: -61px;
  margin-right: 15px;
}

.link {
  color: aliceblue;
  font-family: sans-serif;
  font-weight: bold;
}

#signup {
  background-color: aliceblue;
  color: #290063;
  padding: 10px;
  border-radius: 12px;
  margin: 7px 15px 7px 5px;
}

#signup:hover {
  background-color: #e9ddf9;
}

#login {
  border: 2px solid aliceblue;
  padding: 8px 10px 8px 10px;
  border-radius: 12px;
  margin: 7px 15px 7px 5px;
}

#login:hover {
  background-color: #5f22b6;
}

.linklog {
  margin: 15px 15px 0px 5px;
}

@media screen and (max-width: 418px) {
  .link {
    font-size: 15px;
  }
  #logo {
    width: 100px;
    margin-top: -25px;
  }
}

@media screen and (max-width: 320px) {
  .link {
    font-size: 11px;
  }
}

</style>