<script setup lang="ts">
import Header from './components/Header.vue';
import { onMounted, watch } from '@vue/runtime-core';
import { IconBomb, IconFlag, IconRefresh, iconTime } from './components/index'
import type { block, gameState, modeType } from './type';
import { mineSweeper, getColor } from './game'
import { useClickTwice } from './hooks/useClickTwice';

onMounted(() => {
  mineSweeper.create(10)
})
const type: modeType[] = [{
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

watch(() => mineSweeper.game.count, () => {
  mineSweeper.game.state = 'pending'
  mineSweeper.create(mineSweeper.game.length)
})
let timer: number
watch(() => mineSweeper.game.state, (state: gameState) => {
  if (state === 'playing') {
    mineSweeper.game.costTime = 0
    timer = setInterval(() => {
      mineSweeper.game.costTime++
    }, 1000)
  }
  if (state === 'won' || state === 'fail' || state === 'pending') {
    clearInterval(timer)
  }
})
const clickTwice = useClickTwice(mineSweeper.handleLeftClickTwice);
function handleLeftClick(block: block) {
  mineSweeper.handleLeftClick(block)
  clickTwice(block)
}
</script>

<template>
  <div class="h-screen text-center flex items-center flex-col p-4">
    <Header />
    <div class="flex m-3 al">
      <button
        @click="mineSweeper.handleRefreshClick"
        class="py-1 px-2 mx-1 text-black bg-orange-500 rounded-lg"
      >
        <icon-refresh />
      </button>
      <button
        @click="mineSweeper.handleChangeClick(item)"
        class="py-1 px-2 mx-1 text-black bg-orange-500 rounded-lg"
        v-for="item in type"
      >{{ item.title }}</button>
    </div>
    <div class="flex gap-10 text-lg font-mono">
      <div class="flex gap-6 mb-1">
        <div class="flex items-center">
          <icon-time />
          :{{ mineSweeper.game.costTime }}
        </div>
        <div class="flex items-center">
          <icon-bomb />
          :{{ mineSweeper.game.count - mineSweeper.game.flagCount }}
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-0.5 pb-8">
      <template v-for="line in  mineSweeper.game.blocks">
        <div class="flex gap-0.5">
          <template v-for="block in line">
            <button
              @click="handleLeftClick(block)"
              @contextmenu="mineSweeper.handleRightClick($event, block)"
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
    <footer class="font-mono">Tips:鼠标左键单击点开一个方格,双击自动展开周围未插旗子的方格,右键插旗子</footer>
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
