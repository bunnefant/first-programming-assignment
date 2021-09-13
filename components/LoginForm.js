import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import { useAuth } from '../contexts/AuthContext'


export default function LoginForm() {

  const { loginUser } = useAuth()
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')

  const handlePress = async () => {
    try {
      await loginUser(email, password)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          onChangeText={onChangeEmail}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.userButton}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <Link to='/register'>
          <Text>Sign Up</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000',
    padding: 15
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
  userButton: {
    backgroundColor: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
});
