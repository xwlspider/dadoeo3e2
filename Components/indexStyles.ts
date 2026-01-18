import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 28,
    paddingVertical: 48,
    paddingHorizontal: 32,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 16,
  },

  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#1c1c1e',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.4,
  },

  subtitle: {
    fontSize: 16,
    color: '#6e6e73',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 22,
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 20,

    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
});
