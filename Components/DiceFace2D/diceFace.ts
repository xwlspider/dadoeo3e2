// Components/DiceFace2D/diceFace.logic.ts

export type DotPosition = [number, number];

export const DOTS: Record<number, DotPosition[]> = {
  1: [[50, 50]],
  2: [[20, 20], [80, 80]],
  3: [[20, 20], [50, 50], [80, 80]],
  4: [[20, 20], [80, 20], [20, 80], [80, 80]],
  5: [[20, 20], [80, 20], [50, 50], [20, 80], [80, 80]],
  6: [[20, 20], [80, 20], [20, 50], [80, 50], [20, 80], [80, 80]],
};

export function getDiceDots(value: number): DotPosition[] {
  return DOTS[value] ?? [];
}
