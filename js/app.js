const { createApp } = Vue;

createApp({
  data() {
    return {
      toDoText: "",
      toDoList: [
        {
          text: `Andare a Nevli`,
          done: false,
        },
      ],
    };
  },
  methods: {
    addToList() {
      if (this.toDoText !== "") {
        this.toDoList.push({
          text: this.toDoText,
          done: false,
        });
        this.toDoText = "";
      }
    },
    removeFromList(index) {
      this.toDoList.splice(index, 1);
    },
    doneUndone(task) {
      task.done = !task.done;
    },
  },
}).mount("#app");
