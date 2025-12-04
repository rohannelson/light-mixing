import { persistentMap } from "@nanostores/persistent";

type NextLevel = {
  stage: string;
  level: string;
};

export const $nextLevel = persistentMap<NextLevel>("nextLevel", {
  stage: "",
  level: "",
});
