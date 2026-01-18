type Props = {
  value: number;
  position: [number, number, number];
  rotation: [number, number, number];
};

// Posiciones 2D de los puntos por cara
const DOT_POSITIONS: Record<number, [number, number][]> = {
  1: [[0, 0]],
  2: [[-0.3, -0.3], [0.3, 0.3]],
  3: [[-0.3, -0.3], [0, 0], [0.3, 0.3]],
  4: [
    [-0.3, -0.3],
    [0.3, -0.3],
    [-0.3, 0.3],
    [0.3, 0.3],
  ],
  5: [
    [-0.3, -0.3],
    [0.3, -0.3],
    [0, 0],
    [-0.3, 0.3],
    [0.3, 0.3],
  ],
  6: [
    [-0.3, -0.35],
    [0.3, -0.35],
    [-0.3, 0],
    [0.3, 0],
    [-0.3, 0.35],
    [0.3, 0.35],
  ],
};

export function DiceDots({ value, position, rotation }: Props) {
  return (
    <group position={position} rotation={rotation}>
      {DOT_POSITIONS[value]?.map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.01]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
      ))}
    </group>
  );
}
