<script setup lang="ts">
import logo from '@/assets/logo.png'
import { RouterLink, useRoute } from 'vue-router'
import RouteLink from './RouteLink.vue'
import { computed } from 'vue'

const route = useRoute()

const currentPath = computed(() => {
  const path = route.path
  return path
})

console.log(currentPath)

interface LinkType {
  to: string
  title: string
}

const links: LinkType[] = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/jobs',
    title: 'Jobs'
  },
  {
    to: '/jobs/add',
    title: 'Add Job'
  }
]
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouteLink
                :key="index"
                v-for="(link, index) in links"
                :to="link.to"
                :title="link.title"
                :class="`text-white ${currentPath === link.to ? `bg-green-900` : `hover:bg-gray-900`}  hover:text-white rounded-md px-3 py-2`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
