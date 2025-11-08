export function shuffle(array: number[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function toHexStr(int: number): string {
  return "#" + int.toString(16).padStart(6, "0");
}

export function splitRGB(colour: number): { r: number; g: number; b: number } {
  //Split colours into RGB array
  const r = (colour >> 16) & 0xff; // top 8 bits
  const g = (colour >> 8) & 0xff; // middle 8 bits
  const b = colour & 0xff;
  return { r, g, b };
}
