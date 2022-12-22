<template>
  <div class="container">
    <TheHeader title="Task Tracker" />
    <TheTasks :tasks="tasks" />
  </div>
</template>

<script>
import TheHeader from "./components/Header.vue"
import TheTasks from "./components/Tasks.vue"

export default {
  name: "App",
  components: {
    TheHeader,
    TheTasks
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Play Basket ball',
        day: 'December 29th at 6: 30 pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Lunch with friends',
        day: 'January 5th at 12: 30 pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Meeting at School',
        day: 'January 16th at 9: 30 am',
        reminder: false
      },
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
