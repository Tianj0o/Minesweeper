<script setup lang="ts">
import iconSun from './components/icons/iconSun.vue'
import iconMoon from './components/icons/iconMoon.vue'
import { useDarkMode } from './hooks/useDarkMode'
import { computed, reactive, ref, watch } from '@vue/runtime-core';
import IconBomb from './components/icons/iconBomb.vue';
import IconFlag from './components/icons/iconFlag.vue'
import IconRefresh from './components/icons/iconRefresh.vue'
import * as confetti from 'canvas-confetti'

const mode = useDarkMode()
interface block {
  x: number,
  y: number,
  isMine: boolean
  isOpen: boolean,
  count?: number,
  isFlag: boolean
}
let arr: block[][]
type gameState = 'pending' | 'playing' | 'won' | 'fail'
const game = reactive({
  length: 10,
  count: 10,
  flagCount: 0,
  costTime: new Date().getSeconds(),
  state: <gameState>'pending',
})
function create(length: number, count: number) {
  game.flagCount = 0
  arr = Array.from({ length: length }, (_, y) =>
    Array.from({ length: length }, (_, x) =>
    ({
      x,
      y,
      isMine: false,
      isOpen: false,
      isFlag: false
    }))
  )
  blocks.value = arr
}
interface type {
  title: string,
  count: number,
  length: number
}
const type: type[] = [{
  title: 'Easy',
  count: 10,
  length: 9
}, {
  title: 'Medium',
  count: 40,
  length: 16,
}, {
  title: "Hard",
  count: 88,
  length: 16
}]

const blocks = ref<block[][]>([])

const handleLeftClick = (block: block) => {
  if (game.state === 'pending') {
    generateBombs(blocks.value, game.count, block)
    getAroundBombNumber(blocks.value)
    game.state = 'playing'
  }
  if (game.state !== 'playing') return
  if (block.isFlag === true) return
  if (block.isOpen === false) {
    block.isOpen = true
  }

  if (block.count === 0) {
    clearAround(blocks.value, block)
  }
  if (block.isMine === true) {
    game.state = 'fail'
    for (let i = 0; i < blocks.value.length; i++) {
      for (let j = 0; j < blocks.value[0].length; j++) {
        if (blocks.value[i][j].isMine === true) {
          blocks.value[i][j].isOpen = true
        }
      }
    }
    alert('boom')
  } else if (block.isMine === false) {
    let count = 0
    for (let i = 0; i < blocks.value.length; i++) {
      for (let j = 0; j < blocks.value[0].length; j++) {
        if (blocks.value[i][j].isOpen === false) count++
      }
    }
    if (count === game.count) {
      game.state = 'won'
      confetti.default({
        spread: 180,
        particleCount: 150
      })
    }
  }
}
const handleRightClick = (e: MouseEvent, block: block) => {
  e.preventDefault()
  if (game.state !== 'playing') return
  if (block.isFlag) {
    game.flagCount--
  } else {
    game.flagCount++
  }
  block.isFlag = !block.isFlag

}

const generateBombs = (blocks: block[][], count: number, block: block) => {
  while (count > 0) {
    const randomX = Math.floor(Math.random() * blocks[0].length)
    const randomY = Math.floor(Math.random() * blocks.length)
    if (blocks[randomX][randomY].isMine === false && blocks[randomX][randomY] !== block) {
      blocks[randomX][randomY].isMine = true
      count--
    }
  }
}


const getAroundBombNumber = (blocks: block[][]) => {

  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blocks[0].length; j++) {
      getBlockNumbers(blocks[i][j])
    }
  }

  function getBlockNumbers(block: block) {
    if (block.isMine === true) {
      block.count = 0
      return
    }
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
  }
}
const getColor = (num: number) => {
  let color = ''
  switch (num) {
    case 1: color = 'text-blue-400';
      break;
    case 2: color = 'text-red-400';
      break;
    case 3: color = 'text-yellow-400';
      break;
    case 4: color = 'text-green-400';
      break;
    case 5: color = 'text-pink-400';
      break;
    case 6: color = 'text-purple-400';
      break;
    case 7: color = 'text-gray-400';
      break;
    case 8: color = 'text-indigo-400'
  }
  return color
}
const clearAround = (blocks: block[][], block: block) => {
  let startX = block.y - 1, startY = block.x - 1;
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

create(game.length, game.count)
const handleChangeClick = (type: type) => {
  game.count = type.count
  game.length = type.length
}
const handleRefreshClick = () => {
  game.state = 'pending'
  create(game.length, game.count)
}
watch(() => game.count, () => {
  game.state = 'pending'
  create(game.length, game.count)
})


const costTime = computed(() => {
  return new Date().getSeconds()
})
</script>

<template>
  <div class="h-screen text-center flex items-center flex-col p-4">
    <div class="bg-blue flex items-center" @click="useDarkMode">
      <div class="p-2">Minesweeper</div>
      <icon-sun v-if="mode === 'auto'" />
      <icon-moon v-else />
    </div>
    <div class="flex m-3 al">
      <button
        @click="handleRefreshClick"
        class="py-1 px-2 mx-1 text-black bg-orange-500 rounded-lg"
      >
        <icon-refresh />
      </button>
      <button
        @click="handleChangeClick(item)"
        class="py-1 px-2 mx-1 text-black bg-orange-500 rounded-lg"
        v-for="item in type"
      >{{ item.title }}</button>
    </div>
    <div class="flex gap-10 text-lg font-mono">
      <div class="flex items-center"></div>
      <div class="flex items-center">
        <icon-bomb />
        :{{ game.count - game.flagCount }}
      </div>
    </div>
    <div class="flex flex-col gap-0.5 pb-8">
      <template v-for="line in blocks">
        <div class="flex gap-0.5">
          <template v-for="block in line">
            <button
              @click="handleLeftClick(block)"
              @contextmenu="handleRightClick($event, block)"
              class="w-8 h-8 border border-gray-400 flex items-center justify-center bg-slate-500 font-bold"
              :class="[{ 'open': block.isOpen === true }, getColor(block.count ?? 0)]"
            >
              {{ block.isOpen ? block.count == 0 ? '' : block.count : '' }}
              <icon-bomb v-if="(block.isOpen) && block.isMine" />
              <icon-flag v-else-if="block.isFlag && block.isOpen === false" />
            </button>
          </template>
        </div>
      </template>
    </div>
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
