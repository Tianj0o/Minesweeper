iconSun<script setup lang="ts">
import { useDarkMode } from '../hooks/useDarkMode';
import { iconSun, iconMoon } from './index'
const mode = useDarkMode()
</script>

<template>
  <div class="bg-blue flex items-center" @click="useDarkMode">
    <div class="p-2">Minesweeper</div>
    <icon-sun v-if="mode === 'auto'" />
    <icon-moon v-else />
  </div>
</template>

