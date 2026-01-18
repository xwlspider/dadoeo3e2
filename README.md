# 🎲 Dice Shake App

Aplicación móvil desarrollada con **Expo + React Native** que simula el lanzamiento de un dado utilizando el **acelerómetro del dispositivo**.  
El usuario agita el teléfono y el dado se lanza mostrando un resultado **sincronizado en 3D y 2D**.

---

## ✨ Características principales

- 📱 Detección de movimiento usando acelerómetro
- 🎲 Dado 3D animado con `react-three-fiber`
- 🧊 Cara del dado sincronizada con el resultado
- 🖼️ Representación 2D del resultado
- 🧭 Navegación con `expo-router`
- 🎨 Interfaz limpia y moderna
- 📐 Separación clara entre lógica, estilos y componentes

---

## 🧠 ¿Cómo funciona?

1. El acelerómetro detecta una agitación fuerte del dispositivo.
2. Se genera un número aleatorio entre **1 y 6**.
3. El dado 3D:
   - Se agita
   - Se detiene mostrando **la cara frontal correcta**
4. El resultado se muestra:
   - En texto
   - En un dado 2D sincronizado

---

## 🛠️ Tecnologías usadas

- **Expo**
- **React Native**
- **TypeScript**
- **expo-router**
- **@react-three/fiber**
- **three.js**
- **react-native-safe-area-context**

---