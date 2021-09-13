import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import { useAuth } from '../contexts/AuthContext'


export default function LoginForm() {

  const { loginUser } = useAuth()
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const history = useHistory()

  const handlePress = async () => {
    try {
      await loginUser(email, password)
      history.push('/')
    } catch (err) {
      console.log(process.env.BACKEND_URL)
      console.log(err.message)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>Login Here</Text>
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
        <TouchableOpacity
          style={styles.userButton}
          onPress={() => history.push("/register")}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.userButton}
          onPress={() => history.push("/home")}
        >
          <Text>Go to home screen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202729',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fbfbfb',
    padding: 30
  },
  input : {
    backgroundColor: '#fbfbfb',
    borderColor: '#56b081',
    borderWidth: 3,
    borderRadius: 9,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    padding: 15
  },
  userButton : {
    backgroundColor: '#56b081',
    borderRadius: 9,
    marginBottom: 10,
    textAlign: 'center',
    padding: 15
  },
  buttonContainer : {
    backgroundColor: '#202729',
    flexDirection: "row",
    width: "5%",
    textAlign: 'center',
  }
});
