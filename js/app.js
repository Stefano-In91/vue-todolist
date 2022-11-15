const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    prevDef(event) {
      event.preventDefault();
    },
  },
}).mount("#app");
