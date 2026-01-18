import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { styles } from '../Components/indexStyles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#0f2027', '#203a43', '#2c5364']}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>🎲 Dice Shake App</Text>
            <Text style={styles.subtitle}>
              Agita tu dispositivo para lanzar el dado
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/games/dice')}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Iniciar Juego</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
