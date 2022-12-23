<template>
  <div class="container">
    <TheHeader 
      @toggle-add-task="toggleAddTask" 
      title="Task Tracker" 
      :showAddTask="showAddTask"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <TheTasks 
      @toggle-reminder="toggleReminder" 
      @delete-task="deleteTask" 
      :tasks="tasks" 
    />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/Header.vue"
import TheFooter from "./components/Footer.vue"
import TheTasks from "./components/Tasks.vue"
import AddTask from "./components/AddTask.vue"


export default {
  name: "App",
  
  components: {
    TheHeader,
    TheFooter,
    TheTasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    async addTask(task) {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'DELETE'
        })

        res.status === 200 ? (this.tasks = 
        this.tasks.filter((task) => task.id !== id)) 
        : alert('Error deleting task')
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id 
      ? {...task, reminder: data.reminder} : task)
    },
    async fetchTasks() {
      const res = await fetch('http://localhost:5000/tasks')

      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)

      const data = await res.json()

      return data
    }
  },
  async created() {
    this.tasks = await this.fetchTasks()
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
