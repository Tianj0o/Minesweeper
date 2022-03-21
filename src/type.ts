export interface block {
  x: number;
  y: number;
  isMine: boolean;
  isOpen: boolean;
  count?: number;
  isFlag: boolean;
}

export interface modeType {
  title: string;
  count: number;
  length: number;
}
export type gameState = "pending" | "playing" | "won" | "fail";
export interface game {
  length: number;
  count: number;
  flagCount: number;
  costTime: number;
  state: gameState;
  blocks: block[][];
}
