export const useClickTwice = (fn: (args: any) => void, time = 500) => {
  let tick = 0;
  let Blocks: any[] = [];
  return function (block: any) {
    tick++;
    Blocks.push(block);
    setTimeout(() => {
      if (tick >= 2) {
        if (Blocks.every((item) => item === block)) {
          fn.call(null, Blocks[0]);
        }
      }
      Blocks = [];
      tick = 0;
    }, time);
  };
};
