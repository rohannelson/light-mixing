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
}

export interface GamePath {
  params: { name: string };
  props: Omit<GameProps, "name"> & { next: string };
}
