<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  to: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="to">{{ title }}</RouterLink>
</template>
