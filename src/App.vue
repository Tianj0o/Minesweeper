<script setup lang="ts">
import iconSun from './components/icons/iconSun.vue'
import iconMoon from './components/icons/iconMoon.vue'
import { useDarkMode } from './hooks/useDarkMode'
import { ref } from '@vue/runtime-core';
import IconBomb from './components/icons/iconBomb.vue';
import IconFlag from './components/icons/iconFlag.vue'
const mode = useDarkMode()
interface block {
  x: number,
  y: number,
  isMine: boolean
  isOpen: boolean,
  count?: number,
  isFlag: boolean
}
let arr: block[][] = new Array(3)

arr = Array.from({ length: 16 }, (_, y) =>
  Array.from({ length: 16 }, (_, x) =>
  ({
    x,
    y,
    isMine: false,
    isOpen: false,
    isFlag: false
  }))
)

const blocks = ref(arr)
const handleLeftClick = (block: block) => {

  if (block.isOpen === false) {
    block.isOpen = true
  }
  if (block.count === 0)
    clearAround(blocks.value, block)
  if (block.isMine === true) {
    alert('boom')
  } else if (block.isMine === false) {

  }
}
const handleRightClick = (e: MouseEvent, block: block) => {
  e.preventDefault()
  block.isFlag = !block.isFlag
}
let status = ref('dev')

const generateBombs = (blocks: block[][], count: number) => {
  while (count > 0) {
    const randomX = Math.floor(Math.random() * blocks[0].length)
    const randomY = Math.floor(Math.random() * blocks.length)
    if (blocks[randomX][randomY].isMine === false) {
      blocks[randomX][randomY].isMine = true
      count--
    }
  }
}
generateBombs(blocks.value, 40)

const getAroundBombNumber = (blocks: block[][], block: block) => {
  let startX = block.y - 1, startY = block.x - 1;
  let count = 0;
  for (let i = startX; i <= startX + 2 && i < blocks.length; i++) {
    for (let j = startY; j <= startY + 2 && j < blocks[0].length; j++) {
      if (i >= 0 && j >= 0) {
        if (blocks[i][j].isMine === true) count++
      }
    }
  }
  block.count = count
  return count == 0 ? '' : count
}
const getColor = (num: number) => {
  let color = ''
  switch (num) {
    case 1: color = 'text-blue-400';
      break;
    case 2: color = 'text-red-400';
      break;
      break;
    case 3: color = 'text-yellow-400';
      break;
      break;
    case 4: color = 'text-green-400';
      break;
      break;
    case 5: color = 'text-pink-400';
      break;
      break;
    case 6: color = 'text-purple-400';
      break;
      break;
    case 7: color = 'text-gray-400';
      break;
    case 8: color = 'text-indigo-400'
  }
  return color
}
const clearAround = (blocks: block[][], block: block) => {
  let startX = block.y - 1, startY = block.x - 1;
  // const TRBL = [startX, startY - 1, startX + 1, startY, startX, startY + 1, startX - 1, startY,];


  // if (block.count !== 0) return
  // for (let i = 0; i < TRBL.length; i = i + 2) {
  //   if (TRBL[i] >= 0 && TRBL[i + 1] >= 0 && TRBL[i] < blocks[0].length && TRBL[i + 1] < blocks.length) {
  //     const current = blocks[TRBL[i]][TRBL[i + 1]]
  //     if (current.isMine === true) return

  //     if (current.count === 0 && current.isOpen === false) {
  //       current.isOpen = true
  //       clearAround(blocks, current)
  //     }
  //     current.isOpen = true
  //   }
  // }
  for (let i = startX; i <= startX + 2 && i < blocks.length; i++) {
    for (let j = startY; j <= startY + 2 && j < blocks[0].length; j++) {
      if (i >= 0 && j >= 0 && blocks[i][j] != block) {
        const current = blocks[i][j];
        if (current.isMine === true) return

        if (current.count === 0 && current.isOpen === false) {
          current.isOpen = true
          clearAround(blocks, current)
        }
        current.isOpen = true
      }

    }
  }
}


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
              @click="handleLeftClick(block)"
              @contextmenu="handleRightClick($event, block)"
              class="w-8 h-8 lg:w-8 lg:h-8 border border-gray-400 flex items-center justify-center bg-slate-500 font-bold"
              :class="[{ 'open': block.isOpen === true }, getColor(block.count ?? 0)]"
            >
              {{ (block.isOpen || status === 'dev') ? (block.isMine ? "" : getAroundBombNumber(blocks, block)) : "" }}
              <icon-bomb v-if="(block.isOpen || status === 'dev') && block.isMine" />
              <icon-flag v-if="block.isFlag" />
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
.open {
  background-color: transparent !important;
}
</style>
