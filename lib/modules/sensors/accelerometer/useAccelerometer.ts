import { useEffect, useRef } from 'react';
import { isShaking } from '../../../core/logic/motion';
import { SensorService } from './accelerometerService';

export const useAccelerometer = (onShake: () => void) => {
  const lastShakeTime = useRef(0);
  const shakeCount = useRef(0);

  useEffect(() => {
    const subscription = SensorService.subscribe((data) => {
      const now = Date.now();

      if (isShaking(data)) {
        shakeCount.current += 1;
      } else {
        shakeCount.current = 0;
      }

      // Requiere 3 lecturas consecutivas
      if (
        shakeCount.current >= 3 &&
        now - lastShakeTime.current > 1500
      ) {
        lastShakeTime.current = now;
        shakeCount.current = 0;
        onShake();
      }
    });

    return () => {
      SensorService.unsubscribe(subscription);
    };
  }, []);
};
