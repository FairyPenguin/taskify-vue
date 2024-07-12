<script setup lang="ts">
import HeroUI from '../components/HeroUI.vue'
import HomeCards from '../components/HomeCards.vue'
import JobsList from '../components/JobsList.vue'
</script>

<template>
  <HeroUI />
  <HomeCards />
  <JobsList :showViewAllBtn="true" />
</template>
