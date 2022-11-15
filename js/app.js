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
    prevDef(event) {
      event.preventDefault();
    },
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
    doneUndone(index) {
      if (!this.toDoList[index].done) {
        this.toDoList[index].done = true;
      } else {
        this.toDoList[index].done = false;
      }
    },
  },
}).mount("#app");
