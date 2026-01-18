import { useAccelerometer } from '@/lib/modules/sensors/accelerometer/useAccelerometer';
import { Canvas } from '@react-three/fiber/native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import DiceFace2D from '../../Components/DiceFace2D/DiceFace2D';
import ThreeScene from '../../Components/Three/ThreeScene';

export default function DiceGame() {
  const [dice, setDice] = useState(1);
  const [rollTrigger, setRollTrigger] = useState(0);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setDice(value);
    setRollTrigger(prev => prev + 1);
  };

  useAccelerometer(rollDice);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', marginTop: 40 }}>
        📱 Agita tu dispositivo
      </Text>

      {/* DADO 3D */}
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ThreeScene value={dice} rollTrigger={rollTrigger} />
      </Canvas>

      {/* RESULTADO TEXTO */}
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        Resultado: {dice}
      </Text>

      {/* RESULTADO 2D (SINCRONIZADO) */}
      <DiceFace2D value={dice} />
    </View>
  );
}
