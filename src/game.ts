import { nextTick, reactive, UnwrapNestedRefs } from "vue";
import { block, gameState, game, modeType } from "./type";
import { useClickTwice } from "./hooks/useClickTwice";
import * as confetti from "canvas-confetti";

class Game {
  game: UnwrapNestedRefs<game>;
  constructor(length: number = 10, count: number = 10) {
    this.game = reactive<game>({
      length: length,
      count: count,
      flagCount: 0,
      costTime: 0,
      state: <gameState>"pending",
      blocks: <block[][]>[],
    });
  }
  create(length: number) {
    let arr = [];
    this.game.costTime = 0;
    this.game.flagCount = 0;
    arr = Array.from({ length: length }, (_, y) =>
      Array.from({ length: length }, (_, x) => ({
        x,
        y,
        isMine: false,
        isOpen: false,
        isFlag: false,
      }))
    );
    this.game.blocks = arr;
  }
  generateBombs = (blocks: block[][], count: number, block: block) => {
    while (count > 0) {
      const randomX = Math.floor(Math.random() * blocks[0].length);
      const randomY = Math.floor(Math.random() * blocks.length);
      if (
        blocks[randomX][randomY].isMine === false &&
        blocks[randomX][randomY] !== block
      ) {
        blocks[randomX][randomY].isMine = true;
        count--;
      }
    }
  };
  getAroundBombNumber = (blocks: block[][]) => {
    for (let i = 0; i < blocks.length; i++) {
      for (let j = 0; j < blocks[0].length; j++) {
        getBlockNumbers(blocks[i][j]);
      }
    }

    function getBlockNumbers(block: block) {
      if (block.isMine === true) {
        block.count = 0;
        return;
      }
      let startX = block.y - 1,
        startY = block.x - 1;
      let count = 0;
      for (let i = startX; i <= startX + 2 && i < blocks.length; i++) {
        for (let j = startY; j <= startY + 2 && j < blocks[0].length; j++) {
          if (i >= 0 && j >= 0) {
            if (blocks[i][j].isMine === true) count++;
          }
        }
      }
      block.count = count;
    }
  };

  clearAround = (blocks: block[][], block: block) => {
    let startX = block.y - 1,
      startY = block.x - 1;
    for (let i = startX; i <= startX + 2 && i < blocks.length; i++) {
      for (let j = startY; j <= startY + 2 && j < blocks[0].length; j++) {
        if (i >= 0 && j >= 0 && blocks[i][j] != block) {
          const current = blocks[i][j];
          if (current.isMine === true) return;

          if (current.count === 0 && current.isOpen === false) {
            current.isOpen = true;
            this.clearAround(blocks, current);
          }
          current.isOpen = true;
        }
      }
    }
  };
  handleChangeClick = (type: modeType) => {
    this.game.count = type.count;
    this.game.length = type.length;
  };
  handleRefreshClick = () => {
    this.game.state = "pending";
    this.create(this.game.length);
  };
  handleLeftClick = (block: block) => {
    useClickTwice(this.handleLeftClickTwice);
    if (this.game.state === "pending") {
      this.generateBombs(this.game.blocks, this.game.count, block);
      this.getAroundBombNumber(this.game.blocks);
      this.game.state = "playing";
    }
    if (this.game.state !== "playing") return;
    if (block.isFlag === true) return;
    if (block.isOpen === false) {
      block.isOpen = true;
    }

    if (block.count === 0) {
      this.clearAround(this.game.blocks, block);
    }
    if (block.isMine === true) {
      this.game.state = "fail";
      for (let i = 0; i < this.game.blocks.length; i++) {
        for (let j = 0; j < this.game.blocks[0].length; j++) {
          if (this.game.blocks[i][j].isMine === true) {
            this.game.blocks[i][j].isOpen = true;
          }
        }
      }
      nextTick(() => {
        alert("boom");
      });
    } else if (block.isMine === false) {
      let count = 0;
      for (let i = 0; i < this.game.blocks.length; i++) {
        for (let j = 0; j < this.game.blocks[0].length; j++) {
          if (this.game.blocks[i][j].isOpen === false) count++;
        }
      }
      if (count === this.game.count) {
        this.game.state = "won";
        confetti.default({
          spread: 180,
          particleCount: 150,
        });
      }
    }
  };
  handleRightClick = (e: MouseEvent, block: block) => {
    e.preventDefault();
    if (this.game.state !== "playing") return;
    if (block.isOpen) return;
    if (block.isFlag) {
      this.game.flagCount--;
    } else {
      this.game.flagCount++;
    }
    block.isFlag = !block.isFlag;
  };
  handleLeftClickTwice = (block: block) => {
    if (block.isOpen === false) return;
    let startX = block.y - 1,
      startY = block.x - 1;
    for (let i = startX; i <= startX + 2 && i < this.game.blocks.length; i++) {
      for (
        let j = startY;
        j <= startY + 2 && j < this.game.blocks[0].length;
        j++
      ) {
        if (i >= 0 && j >= 0 && this.game.blocks[i][j] != block) {
          this.handleLeftClick(this.game.blocks[i][j]);
        }
      }
    }
  };
}

export const mineSweeper = new Game(10, 10);

export const getColor = (num: number) => {
  let color = "";
  switch (num) {
    case 1:
      color = "text-blue-400";
      break;
    case 2:
      color = "text-red-400";
      break;
    case 3:
      color = "text-yellow-400";
      break;
    case 4:
      color = "text-green-400";
      break;
    case 5:
      color = "text-pink-400";
      break;
    case 6:
      color = "text-purple-400";
      break;
    case 7:
      color = "text-gray-400";
      break;
    case 8:
      color = "text-indigo-400";
  }
  return color;
};
