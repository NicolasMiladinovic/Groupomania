<script>
import axios from "axios";

export default {
  name: "Comms",
  data() {
    return {
      comms: [],
      user_connected_id: localStorage.getItem("user_id"),
    };
  },
  created() {
    this.getAllComms();
  },
  methods: {
    addComm() {
      const post_id = this.$route.params.id;
      const content = document.getElementById("content").value;
      axios
        .post(
          `http://localhost:3000/post/${post_id}/reply`,
          {
            content,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            this.getAllComms();
            document.getElementById("replys-form").reset();
          }
        });
    },

    getAllComms() {
      const post_id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/post/${post_id}/reply`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((response) => {
          this.comms = response.data;
        });
    },

    deleteComm(id) {
      axios
        .post(
          `http://localhost:3000/post/reply`,
          {
            id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$token}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            this.getAllComms();
          }
        });
    },
  },
};
</script>

<template>
  <div id="comms">
    <div>{{ comms.length }} Reply<span v-if="comms.length > 1">s</span></div>
    <form @submit.prevent="addComm()" id="replys-form">
      <input id="content" />
      <button type="submit">Comment</button>
    </form>
    <div id="comms-box" v-for="Comms in comms" :key="Comms.id">
      <div id="pseudo-delete">
        <div
          id="comms-delete"
          v-if="Comms.user_id == user_connected_id"
          @click="deleteComm(Comms.id)"
        >
          X
        </div>
        <div id="pseudo">@{{ Comms.pseudo }}</div>
      </div>
      <div id="comm-content">{{ Comms.content }}</div>
    </div>
  </div>
</template>

<style>
#comms {
  width: 95%;
  max-width: 700px;
  background-color: #f5f5f5;
  margin: -30px auto 0 auto;
  padding: 10px;
  border-radius: 5px;
}

#comms-box {
  border-top: 1px solid grey;
  padding: 5px 0;
}

#content {
  border: 1px solid grey;
  margin: 0 40px 20px 0;
  width: 80%;
}

#pseudo {
  color: grey;
  font-style: italic;
}

#pseudo-delete {
  display: flex;
  justify-content: space-between;
}

#comms-delete {
  color: grey;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 100px;
  padding: 0 7px 0 7px;
}

#comms-delete:hover {
  color: red;
}
</style>