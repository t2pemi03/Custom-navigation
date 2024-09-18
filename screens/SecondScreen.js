import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SecondScreen;
