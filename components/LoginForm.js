import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginForm() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Login To The App Here</Text>
        <TextInput
          style={styles.input}
    placeholder="Username"
        />
        <TextInput
          style={styles.input}
    placeholder="Password"
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000',
    padding: 15
  },
  input : {
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
  user-button : {
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
});
