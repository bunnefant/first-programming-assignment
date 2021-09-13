import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-native'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext'


const RegisterForm = () => {

  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const { registerUser } = useAuth()
  const history = useHistory()

  const handlePress = async () => {
    try {
      await registerUser(email, password)
      history.push('/')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          style={styles.userButton}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => history.push("/login")}
          style={styles.userButton}
        >
          <Text>Already Have an Account?</Text>
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

export default RegisterForm;
