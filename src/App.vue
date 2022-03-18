<script setup lang="ts">
import iconSun from './components/icons/iconSun.vue'
import iconMoon from './components/icons/iconMoon.vue'
import { useDarkMode } from './hooks/useDarkMode'
const mode = useDarkMode()

</script>

<template>
  <div class="h-screen text-center flex items-center flex-col p-4 dark:bg-gray-900 dark:text-white">
    <div class="bg-blue flex items-center" @click="useDarkMode">
      <div class="p-2">Minesweeper</div>
      <icon-sun v-if="mode === 'auto'" />
      <icon-moon v-else />
    </div>
  </div>
</template>


<style>
</style>
