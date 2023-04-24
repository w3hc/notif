import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [status, setStatus] = useState(0);

  const increment = async () => {
    setStatus(status+1);
  }

  return (
    <View style={styles.container}>
      <Text style={{color:"white"}}>Welcome to Notif!</Text>
      <Text style={{color:"white"}}> </Text>
      <Text style={{color:"#45a2f8"}}>{status}</Text>
      <Text style={{color:"white"}}> </Text>

      <Button
        onPress={increment}
        title="Click me"
        color="#8c1c84"
        accessibilityLabel="Learn more about this button"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});