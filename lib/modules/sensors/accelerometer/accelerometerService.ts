import { Accelerometer } from 'expo-sensors';
import { ACCELEROMETER_INTERVAL } from '../../../core/Constants';

export const SensorService = {
  // Inicia la escucha del acelerómetro
  subscribe(callback: (data: any) => void) {
    Accelerometer.setUpdateInterval(ACCELEROMETER_INTERVAL);
    return Accelerometer.addListener(callback);
  },

  // Limpieza para evitar fugas de memoria
  unsubscribe(subscription: any) {
    if (subscription) {
      subscription.remove();
    }
  },
};
