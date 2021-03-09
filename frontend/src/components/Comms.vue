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
  <div id="comms_container">
    {{ comms.length }} Reply<span v-if="comms.length > 1">s</span>
    <form @submit.prevent="addComm()" id="replys-form">
      <input id="content" />
      <button type="submit">Comment</button>
    </form>
    <div id="comms" v-for="Comms in comms" :key="Comms.id">
      <div
        v-if="Comms.user_id == user_connected_id"
        @click="deleteComm(Comms.id)"
        id="delete-comm"
      >
        X
      </div>
      <div id="pseudo">@{{ Comms.pseudo }}</div>
      <div id="comm-content">{{ Comms.content }}</div>
    </div>
  </div>
</template>

<style>
#comms_container {
  margin: 10px auto;
  background: #fff;
  width: 700px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#comms {
  border: 1px solid grey;
}

#img {
  max-width: 700px;
  max-height: 398px;
}

#comm-content {
  margin: 2px 5px;
}

#delete-comm {
  float: right;
}
#delete-comm {
  cursor: pointer;
}

@media screen and (max-width: 715px) {
  #comms_container {
    width: 90%;
  }
}
</style>