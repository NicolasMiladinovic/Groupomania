<script>
import axios from "axios";

export default {
  name: "Comms",
  data() {
    return {
      comms: [],
    };
  },
  mounted() {
    this.getAllComms();
  },
  methods: {
    getAllComms() {
      const post_id = this.$route.params.id;
      console.log(post_id);
      axios
        .get(`http://localhost:3000/post/${post_id}/reply`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((response) => {
          this.comms = response.data;
          console.log(this.comms);
        });
    },
  },
};
</script>

<template>
  <div id="comms_container">
    {{ comms.length }} Reply<span v-if="comms.length > 1">s</span>
    <div id="comms" v-for="Comms in comms" :key="Comms.id">
      <div> @{{ Comms.pseudo }} </div>
      <div> {{ Comms.content }} </div>
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
</style>