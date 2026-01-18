import { Text } from 'react-native';
import { styles } from '../DiceTextStyle';

type Props = {
  value: number;
};

export const DiceText = ({ value }: Props) => {
  return ( 
    <Text style={styles.instruction}>
      Resultado: {value}
    </Text>
  );
};
