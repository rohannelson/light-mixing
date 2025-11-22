export type BlockProps = {
  boardSize: number;
  blockSize: number;
};

export interface GameProps {
  tertiary?: boolean;
  sandbox?: boolean;
  size?: number;
  goal?: number[];
  text?: string;
  name?: string;
  next?: string;
  list?: number[];
  board?: number[];
}

export interface GamePath {
  params: { name: string };
  props: Omit<GameProps, "name"> & { next: string };
}

export interface History {
  boardColours: number[];
  listColours: number[];
}
[];
