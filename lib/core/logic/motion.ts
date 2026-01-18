import { SHAKE_THRESHOLD } from '../Constants';

// Tipo de vector 3D
type Vector3 = {
  x: number;
  y: number;
  z: number;
};

export const isShaking = (data: Vector3): boolean => {
  // Magnitud Euclidiana |A| = √(x² + y² + z²)
  const magnitude = Math.sqrt(
    data.x ** 2 +
    data.y ** 2 +
    data.z ** 2
  );

  // Decisión física
  return magnitude > SHAKE_THRESHOLD;
};
