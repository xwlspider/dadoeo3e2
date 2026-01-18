import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { DiceDots } from './DiceDots';

type Props = {
  value: number;
  rollTrigger: number;
};

export default function ThreeScene({ value, rollTrigger }: Props) {
  const meshRef = useRef<any>(null);
  const speed = useRef(0);
  const targetRotation = useRef<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    speed.current = 7;
    const ROTATIONS: Record<number, [number, number, number]> = {
      1: [0, 0, 0],
      2: [-Math.PI / 2, 0, 0],
      3: [0, Math.PI / 2, 0],
      4: [0, -Math.PI / 2, 0],
      5: [Math.PI / 2, 0, 0],
      6: [Math.PI, 0, 0],
    };
    
    targetRotation.current = ROTATIONS[value];
    
  }, [rollTrigger, value]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Giro libre
    if (speed.current > 0.05) {
      meshRef.current.rotation.x += speed.current * delta;
      meshRef.current.rotation.y += speed.current * delta;
      speed.current *= 0.94;
      return;
    }

    // Acomodo a la cara correcta
    const [tx, ty, tz] = targetRotation.current;

    meshRef.current.rotation.x += (tx - meshRef.current.rotation.x) * 0.12;
    meshRef.current.rotation.y += (ty - meshRef.current.rotation.y) * 0.12;
    meshRef.current.rotation.z += (tz - meshRef.current.rotation.z) * 0.12;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color="#ffffff" roughness={0.4} />

      {/* Caras del dado */}
      <DiceDots value={1} position={[0, 0, 0.61]} rotation={[0, 0, 0]} />
      <DiceDots value={6} position={[0, 0, -0.61]} rotation={[0, Math.PI, 0]} />
      <DiceDots value={2} position={[0, 0.61, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <DiceDots value={5} position={[0, -0.61, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <DiceDots value={3} position={[0.61, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <DiceDots value={4} position={[-0.61, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
    </mesh>
  );
}
