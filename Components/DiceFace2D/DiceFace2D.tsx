// Components/DiceFace2D/DiceFace2D.tsx

import { View } from 'react-native';
import { getDiceDots } from './diceFace';
import { styles } from './DiceFaceStyle';

type Props = {
  value: number;
};

export default function DiceFace2D({ value }: Props) {
  const dots = getDiceDots(value);

  return (
    <View style={styles.face}>
      {dots.map(([x, y], i) => (
        <View
          key={i}
          style={[styles.dot, { left: x, top: y }]}
        />
      ))}
    </View>
  );
}
