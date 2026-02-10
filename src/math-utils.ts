export function saturate(value: number) {
  return Math.max(Math.min(value, 1.0), 0.0);
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
