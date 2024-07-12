<script setup lang="ts">
import { ref } from 'vue'
import Jobs from '../jobs.json'
import JobItem from './JobItem.vue'
import { RouterLink } from 'vue-router'

const jobs = ref(Jobs)
console.log(jobs.value)

defineProps({
  limit: {
    type: Number,
    default: 6,
    required: true
  },
  showViewAllBtn: {
    type: Boolean,
    default: false,
    required: true
  },
  text: {
    type: String,
    default: 'tt',
    required: true
  }
})
</script>

<template>
  <!-- Browse Jobs -->
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Job Item -->
        <JobItem v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="showViewAllBtn" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
