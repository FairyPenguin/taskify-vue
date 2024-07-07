<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

interface todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const status = ref('active')
const name = ref('mahmoud')
const arrayOfTasks = ref(['1', '2', '3'])
const url = ref('https://github.com/FairyPenguin')
const todosArray = ref<todo[]>([])

const newTask = ref('')

function addNewTask() {
  if (newTask.value.trim() !== '') {
    // add new task to the array
    arrayOfTasks.value.push(newTask.value)
    // clear the input field
    newTask.value = ''
  }
}

function deleteTask(index: number) {
  arrayOfTasks.value.splice(index, 1)
}

onMounted(async function fetchTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()

  todosArray.value = data.map((todo: todo) => {
    return todo.title
  })
})

function toggleStatus() {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}
</script>

<template>
  <h1>Vue Taskify</h1>
  <br />

  <form @submit.prevent="addNewTask">
    <label for="task">
      <input id="task" type="text" name="newTask" v-model="newTask" />
    </label>

    <button type="submit">Add New Task</button>
  </form>

  <h2>{{ name }}</h2>
  <br />

  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <br />

  <button @click="toggleStatus">Change</button>
  <br />

  <a v-bind:href="url">GH LINK</a>
  <ul>
    <li :key="task" v-for="(task, index) in arrayOfTasks">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">DELETE TASK</button>
    </li>
  </ul>

  <ul>
    <li :key="index" v-for="(todo, index) in todosArray">{{ todo }}</li>
  </ul>
</template>

<style scoped></style>
