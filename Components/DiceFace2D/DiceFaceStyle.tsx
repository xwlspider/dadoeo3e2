// Components/DiceFace2D/diceFace.styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  face: {
    width: 140,
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 40,
    position: 'relative',
    elevation: 5,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#000',
    position: 'absolute',
  },
});
