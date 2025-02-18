import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [foregroundResult, setForegroundResult] = useState('Not requested');
  const [backgroundResult, setBackgroundResult] = useState('Not requested');

  // Request foreground location permission
  const requestForeground = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log('Foreground permission result:', status);
      setForegroundResult(status);
    } catch (error) {
      console.log('Foreground permission error:', error);
      setForegroundResult('Error');
    }
  };

  // Request background location permission
  const requestBackground = async () => {
    try {
      const { status } = await Location.requestBackgroundPermissionsAsync();
      console.log('Background permission result:', status);
      setBackgroundResult(status);
    } catch (error) {
      console.log('Background permission error:', error);
      setBackgroundResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button
          title='Request Foreground Permission'
          onPress={requestForeground}
        />
        <Button
          title='Request Background Permission'
          onPress={requestBackground}
        />
      </View>

      <View style={styles.results}>
        <Text>Foreground location permission result: {foregroundResult}</Text>
        <Text>Background location permission result: {backgroundResult}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  buttons: {
    gap: 10,
    padding: 20,
  },
  results: {
    padding: 20,
    gap: 10,
  },
});
