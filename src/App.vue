<script setup lang="ts">
import iconSun from './components/icons/iconSun.vue'
import iconMoon from './components/icons/iconMoon.vue'
import { useDarkMode } from './hooks/useDarkMode'
import { ref } from '@vue/runtime-core';
import IconBomb from './components/icons/iconBomb.vue';
const mode = useDarkMode()
interface block {
  x: number,
  y: number,
  isMine: boolean
  isOpen: boolean
}
let arr: block[][] = new Array(5)

arr = Array.from({ length: 10 }, (_, y) =>
  Array.from({ length: 10 }, (_, x) =>
  ({
    x,
    y,
    isMine: true,
    isOpen: false
  }))
)

const blocks = ref(arr)
const handleClick = (block: block) => {
  block.isOpen = !block.isOpen
}
let status = ref('dev')

</script>

<template>
  <div class="h-screen text-center flex items-center flex-col p-4 dark:bg-gray-900 dark:text-white">
    <div class="bg-blue flex items-center" @click="useDarkMode">
      <div class="p-2">Minesweeper</div>
      <icon-sun v-if="mode === 'auto'" />
      <icon-moon v-else />
    </div>
    <div class="flex flex-col gap-0.5">
      <template v-for="line in blocks">
        <div class="flex gap-0.5">
          <template v-for="block in line">
            <button
              @click="handleClick(block)"
              class="w-8 h-8 lg:w-10 lg:h-10 border border-gray-400 flex items-center justify-center"
              :class="'open'"
            >
              <!-- {{ block.x + 1 + block.y * 10 }} -->
              <icon-bomb v-if="(block.isOpen || status === 'dev') && block.isMine" />
            </button>
          </template>
        </div>
      </template>
    </div>
    <button @click="status = status === 'dev' ? 'dep' : 'dev'">{{ status }}</button>
  </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
}
</style>
